import mongoose, { Schema } from 'mongoose'

const requiredString = {
    type: String,
    requires: true,
}

const welcomeSchema = new Schema({
    // Guild ID
    _id: requiredString,
    channelId: requiredString,
    text: requiredString,
})

const name = 'welcome'

export default mongoose.models[name] || mongoose.model(name, welcomeSchema, name)