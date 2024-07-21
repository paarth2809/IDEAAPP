const Ideas = require('../models/idea.models');
let id = 0;

exports.getAllIdeas = async (req, res) => {
    try {
        const allIdeas = await Ideas.find();
        if (allIdeas.length > 0) {
            res.status(200).send(allIdeas);
        } else {
            res.status(404).send({ message: "No ideas present" });
        }
    } catch (err) {
        res.status(500).send({ message: "Error retrieving ideas", error: err.message });
    }
};

exports.getIdeaById = async (req, res) => {
    const ideaId = req.params.id;
    try {
        const ideaObj = await Ideas.findOne({ id: ideaId });
        if (ideaObj) {
            res.status(200).send(ideaObj);
        } else {
            res.status(404).send({ message: "Idea with given ID not present" });
        }
    } catch (err) {
        res.status(500).send({ message: "Error retrieving idea", error: err.message });
    }
};

exports.createIdea = async (req, res) => {
    const ideaObj = req.body;
    id++;
    ideaObj["id"] = id;
    try {
        const newIdea = await Ideas.create(ideaObj);
        res.status(201).send(newIdea);
    } catch (err) {
        res.status(500).send({ message: "Error creating idea", error: err.message });
    }
};

// exports.updateIdea = async (req, res) => {
//     const ideaId = req.params.id;
//     const newIdeaObj = req.body;
//     newIdeaObj["id"] = ideaId;
//     try {
//         const updatedIdea = await Ideas.findOneAndUpdate({ id: ideaId }, newIdeaObj, { new: true });
//         if (updatedIdea) {
//             res.status(200).send(updatedIdea);
//         } else {
//             res.status(404).send({ message: "Idea with given ID not present" });
//         }
//     } catch (err) {
//         res.status(500).send({ message: "Error updating idea", error: err.message });
//     }
// };

exports.updateIdea = async (req, res) => {
    const ideaId = req.params.id;
    const IdeaObj = req.body;
    try {
        const fetchedIdea = await Ideas.findOne({ id: ideaId });
        if (fetchedIdea) {
            for (const key in IdeaObj) {
                fetchedIdea[key] = IdeaObj[key];
            }
            const updatedIdea = await fetchedIdea.save();
            res.status(200).send(updatedIdea);
        } else {
            res.status(404).send({ message: "Idea with given ID not present" });
        }
    } catch (err) {
        res.status(500).send({ message: "Error updating idea", error: err.message });
    }
};


exports.deleteIdea = async (req, res) => {
    const ideaId = req.params.id;
    try {
        const result = await Ideas.deleteOne({ id: ideaId });
        if (result.deletedCount) {
            res.status(200).send({ message: "Idea deleted successfully" });
        } else {
            res.status(404).send({ message: "Idea with given ID not present" });
        }
    } catch (err) {
        res.status(500).send({ message: "Error deleting idea", error: err.message });
    }
};
