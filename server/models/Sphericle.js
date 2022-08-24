const { Schema, model } = require('mongoose');

const sphericleSchema = new Schema(
    {
        text: {
            type: String,
            required: true,
            trim: true        
        },
        category: {
            type: String,
            required: true
        },
        voteCount: {
            type: Number,
            default: 0
        }
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
)

const Sphericle = model("Sphericle", sphericleSchema);

module.exports = Sphericle;