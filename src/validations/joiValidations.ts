import Joi from 'joi';

const sendExamValidation = Joi.object({
    name: Joi.string().min(3).required(),
    link: Joi.string().uri().required(),
    category: Joi.object().required(),
    profesor: Joi.object().required(),
});

export default sendExamValidation;
