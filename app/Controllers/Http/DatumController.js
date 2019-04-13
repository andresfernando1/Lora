const Data = use('App/Models/Datum');

class DatumController {

    async index({ request, response }) {
        const page = request.input('page') || 1;
        const per_page = request.input('per_page') || 20;

        const data = await Data.query().paginate(page, per_page);

        return response.status(200).json({
            data
        });
    }

    static async store({ message }) {


        await Data.create({ message });
        console.log(`Store ${message}`);
    }

}

module.exports = DatumController;