export default function validate(input) {
    const errors = {};

    if (!input.name.length) {
        errors.name = "Debe ingresar un nombre para el libro"
    } else {
        const alphanumericSymbolRegexp = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\sáéíóúÁÉÍÓÚñÑüÜ]*$/;


        if (!alphanumericSymbolRegexp.test(input.name)) errors.name = "El nombre colocado tiene caracteres no permitidos"
    }

    if (!input.editorial.length) {
        errors.editorial = "Debe ingresar un nombre de editorial"
    } else {
        const alphanumericSymbolRegexp2 = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\sáéíóúÁÉÍÓÚñÑüÜ]*$/;

        if (!alphanumericSymbolRegexp2.test(input.name)) errors.name = "El nombre colocado tiene caracteres no permitidos"
    }

    if (!input.category) {
        errors.category = "Debe escoger un género literario"
    } else {
        const allowedCategories = ["Terror", "Comedy", "Romance", "Education", "Self-Help"]
        if (!allowedCategories.includes(input.category)) errors.category = "La categoría elegida no es válida"
    }

    if (!input.author) {
        errors.author = "Debe ingresar un nombre para el autor"
    } else {
        const lettersRegexp = /^[a-zA-Z\s]+$/;

        if (!lettersRegexp.test(input.author)) errors.author = "El nombre del autor sólo puede contener letras"
    }

    if (!input.price) {
        errors.price = "Debe ingresar un número"
    } else {
        const priceRegexp = /^\d+(\.\d{1,2})?$/;
        if (isNaN(input.price || input.price <= 0)) {
            errors.price = "El precio debe ser un número positivo";
        } else if (parseFloat(input.price) > 99999.99) {
            errors.price = "El precio no debe ser mayor que 99999.99";
        } else if (!priceRegexp.test(input.price)) {
            errors.price = "El precio debe ser un número con hasta dos decimales";
        }
    }

    if (input.image && input.image.trim() !== "") {
        const urlRegexp = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlRegexp.test(input.image)) errors.image = "Debe ingresar una URL válida de imagen";
    }


    if (!input.description) {
        errors.description = "Debe ingresar la descripción del libro"
    } else {
        if (input.description.length > 1000) {
            errors.description = "La descripción del libro no puede ser mayor a 1000 caracteres";
        }
    }

    if (!input.image) {
        errors.image = "Debe ingresar una imagen para el nuevo libro"
    }

    if (!input.file) {
        errors.file = "Debe ingresar una URL que lleve al archivo"
    } else {
        const urlRegexp = /^(ftp|http|https):\/\/[^ "]+$/;

        if (!urlRegexp.test(input.file)) errors.file = "Debe ingresar una URL válida";
    }

    return errors;
}