 try {
        const user = await User.findById(req.user._id).select('name', 'email');
        const profile = await Profile.findOne({ user: req.user._id });

        if (!user || !profile) {
            return res.status(404).json({ error: 'User or profile not found' });
        }