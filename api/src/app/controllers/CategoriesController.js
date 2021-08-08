const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoriesController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return response.status(400).json({ error: 'Category not found' });
    }

    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json('Name is required');
    }

    const categoryExists = await CategoriesRepository.findByName(name);
    if (categoryExists) {
      return response.status(400).json('This name is already in use');
    }

    const newCategory = await CategoriesRepository.create({ name });

    response.json(newCategory);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    if (!name) {
      return response.status(400).json('Name is required');
    }

    const categoryByName = await CategoriesRepository.findByName(name);

    if (categoryByName && categoryByName.id !== id) {
      return response.status(400).json('This name is already in use');
    }

    const category = await CategoriesRepository.update({ id, name });
    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CategoriesController();
