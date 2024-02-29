/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({request}) => {
		var data = await request.formData()
        var name= data.get("name")
        alert(name)
	}
};