import Joi from 'joi';

const sendExamValidation = Joi.object({
    name: Joi.string().min(3).required(),
    link: Joi.string().uri().required(),
    categoryId: Joi.number().required(),
    profesorId: Joi.number().required(),
});

export default sendExamValidation;
