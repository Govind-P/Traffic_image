import ImageSchema from '../models/image.js'; 


export const uploadImage = async (req, res) => {
    try {
        if (!req.body || !req.body.imageData) {
            return res.status(400).json({ error: 'No image data provided.' });
        }

        const imageData = req.body.imageData;
        const newImage = new ImageSchema({
            image: imageData,
        });
        const savedImage = await newImage.save();
        res.status(201).json(savedImage);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



// Retrieve uploaded image
export const getImage = async (req, res) => {
    try {
        const allImages = await ImageSchema.find();
        const shuffledImages = allImages.sort(() => 0.5 - Math.random());
        res.json(shuffledImages.slice(0, 4));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


export const newImage = async (req, res) => {
    try {
        // Get the count of all documents in the images collection
        const count = await ImageSchema.countDocuments();
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * count);
        // Retrieve one random image from the database
        const randomImage = await ImageSchema.findOne().skip(randomIndex);

        if (!randomImage) {
            res.status(404).json({ error: "No image found" });
        } else {
            res.json(randomImage);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


