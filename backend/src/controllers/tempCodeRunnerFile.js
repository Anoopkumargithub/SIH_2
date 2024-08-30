export const getQuestion = async (req, res) => {
    try{
        // fetch user role and skill

        const profile = await Profile.findOne({userId : req.user._id});
        console.log(profile)
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
          }
          const role = profile.role;
          console.log(role)



        // fetch question based on user role and skill
        
        // fetch all question

        const question = await NQuestion.find({ role: { $in: [role] } });
        console.log(question);
        if (!question.length) {
            return res.status(404).json({ message: 'No questions found' });
          }
        console.log(question);
    
        

        res.status(200).json(question);

    }
    catch(err){
        res.status(500).json({ message: 'An error occurred', error: err.message });

        console.log(err);
    } 
}