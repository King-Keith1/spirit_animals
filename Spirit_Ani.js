// document.addEventListener("DOMContentLoaded", function () {
//     const questions = [
//         { text: "What is your name?", type: "text", key: "name" },
//         { text: "Is your name based on the Bible?", type: "boolean", key: "nameOrigin" },
//         { text: "What is your birthdate?", type: "date", key: "birthDate" },
//         { text: "What is your birth year?", type: "number", key: "birthYear" },
//         { text: "Are you a night or day person?", type: "choice", key: "timeOfDay", options: ["Night", "Day"] },
//         { text: "Would you choose to breathe underwater, fly, or remain as you are?", type: "choice", key: "abilityChoice", options: ["Breathe underwater", "Fly", "Remain as I am"] },
//         { text: "Would you rather be a ruler of a nation or be free, not shackled to anything?", type: "choice", key: "rulerOrFree", options: ["Ruler", "Free"] },
//         { text: "Would you rather be a Carnivore, Herbivore, or Omnivore?", type: "choice", key: "diet", options: ["Carnivore", "Herbivore", "Omnivore"] },
//         { text: "What kind of environment do you thrive in?", type: "choice", key: "environment", options: ["Forest", "Desert", "Mountains", "City", "Ocean", "Plains"] },
//         { text: "Would you prefer being alone most of your life or surrounded by people?", type: "choice", key: "socialPreference", options: ["Alone", "Surrounded by people"] },
//         { text: "Do you naturally take charge in group situations, or do you prefer to follow others' lead?", type: "choice", key: "leadership", options: ["Take charge", "Follow others' lead"] },
//         { text: "What season do you thrive in?", type: "choice", key: "season", options: ["Spring", "Summer", "Fall", "Winter"] },
//         { text: "Which trait defines you the most?", type: "choice", key: "mainTrait", options: ["Independence", "Empathy", "Curiosity", "Wisdom", "Perseverance"] },
//         { text: "If you had to rely on just one of your senses, what would it be?", type: "choice", key: "sense", options: ["Hearing", "Smell", "Eyesight", "Sixth sense"] },
//         { text: "When you take on a task, you like to get it done...?", type: "choice", key: "taskApproach", options: ["Your way", "In a team", "As soon as possible"] },
//         { text: "Faced with an unusual situation...", type: "choice", key: "unusualSituation", options: ["React immediately", "Think before acting", "Get around the problem"] },
//         { text: "Faced with important choices in life...", type: "choice", key: "lifeChoices", options: ["Don't like to choose", "Call loved ones", "Decide on my own"] },
//         { text: "People are often surprised by your...", type: "choice", key: "firstImpression", options: ["Charisma", "Mind", "Speed", "Curiosity", "I don't know"] },
//         { text: "Your seductive trump card?", type: "choice", key: "seduction", options: ["Confidence", "Mystery", "Intelligence", "Determination", "I don't know"] },
//         { text: "Your ideal vacation?", type: "choice", key: "vacation", options: ["Relax with family", "Beach parties", "Backpacking and sightseeing"] },
//         { text: "Which describes you more?", type: "choice", key: "personality", options: ["Sensible", "Peaceful", "Curious", "Courageous", "Creative"] },
//         { text: "Most important objective?", type: "choice", key: "objective", options: ["Fame", "Wealth", "Love", "Peace"] },
//         { text: "Your ambition?", type: "choice", key: "ambition", options: ["Fulfill dreams", "Enjoy life", "Be a leader in major projects"] },
//         { text: "Which major animal do you identify with?", type: "choice", key: "animalType", options: ["Bird", "Mammal", "Reptile", "Fish", "Amphibian"] },
//         { text: "Which superpower would you choose?", type: "choice", key: "superpower", options: ["Super strength", "Super speed", "Flight", "X-ray vision"] },
//         { text: "Which element do you feel connected to?", type: "choice", key: "element", options: ["Fire", "Water", "Wind", "Earth"] }
//     ];

//     const animalData = [ 
//     // 🦉 Birds
//         { name: "Eagle", type: "Bird", traits: ["Visionary", "Independent", "Strong-willed"], zodiacMatches: ["Aries", "Scorpio"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Leadership, Freedom, Perspective" },
//         { name: "Hawk", type: "Bird", traits: ["Focused", "Strategic", "Determined"], zodiacMatches: ["Aries", "Sagittarius"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Vision, Clarity, Purpose" },
//         { name: "Raven", type: "Bird", traits: ["Mysterious", "Curious", "Stealthy"], zodiacMatches: ["Scorpio", "Aquarius"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Mysticism, Intelligence, Transformation" },
//         { name: "Owl", type: "Bird", traits: ["Wise", "Intuitive", "Stealthy"], zodiacMatches: ["Capricorn", "Pisces"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Wisdom, Mystery, Perception" },
//         { name: "Phoenix", type: "Bird", traits: ["Resilient", "Transformative", "Immortal"], zodiacMatches: ["Leo", "Sagittarius"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Rebirth, Fire, Renewal" },
//         { name: "Albatross", type: "Bird", traits: ["Navigator", "Longevity", "Graceful"], zodiacMatches: ["Sagittarius", "Aquarius"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Freedom, Endurance, Journey" },
//         { name: "Hummingbird", type: "Bird", traits: ["Energetic", "Joyful", "Agile"], zodiacMatches: ["Gemini", "Virgo"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Lightness, Adaptability, Happiness" },
//         { name: "Kingfisher", type: "Bird", traits: ["Precise", "Focused", "Resilient"], zodiacMatches: ["Scorpio", "Capricorn"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Patience, Precision, Prosperity" },
//         { name: "Osprey", type: "Bird", traits: ["Hunter", "Strong", "Determined"], zodiacMatches: ["Aries", "Leo"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Power, Focus, Victory" },
//         { name: "Parrot", type: "Bird", traits: ["Communicative", "Social", "Intelligent"], zodiacMatches: ["Gemini", "Libra"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Expression, Vibrancy, Adaptability" },
//         { name: "Penguin", type: "Bird", traits: ["Resilient", "Loyal", "Adaptable"], zodiacMatches: ["Cancer", "Capricorn"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Survival, Community, Endurance" },
//         { name: "Griffin", type: "Mythical Bird", traits: ["Guardian", "Regal", "Mighty"], zodiacMatches: ["Leo", "Aries"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Power, Honor, Nobility" },
//         { name: "Rooster", type: "Bird", traits: ["Proud", "Vocal", "Alert"], zodiacMatches: ["Leo", "Virgo"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Confidence, Vigilance, Hard Work" },
//         { name: "Stork", type: "Bird", traits: ["Nurturing", "Migratory", "Hopeful"], zodiacMatches: ["Cancer", "Libra"], generations: ["Boomers", "Gen X"], symbolicMeaning: "New Beginnings, Family, Luck" },
//         { name: "Vulture", type: "Bird", traits: ["Patient", "Survivor", "Resourceful"], zodiacMatches: ["Scorpio", "Capricorn"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Transformation, Cleansing, Renewal" },
//         { name: "Woodpecker", type: "Bird", traits: ["Persistent", "Determined", "Rhythmic"], zodiacMatches: ["Taurus", "Cancer"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Opportunity, Determination, Awareness" },
//         { name: "Dove", type: "Bird", traits: ["Peaceful", "Loving", "Gentle"], zodiacMatches: ["Libra", "Pisces"], generations: ["All"], symbolicMeaning: "Peace, Love, Harmony" },
        
//         // 🦁 Mammals
//         { name: "Armadillo", type: "Mammal", traits: ["Protective", "Resilient", "Adaptable"], zodiacMatches: ["Taurus", "Scorpio"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Defense, Boundaries, Survival" },
//         { name: "Bat", type: "Mammal", traits: ["Mysterious", "Intuitive", "Nocturnal"], zodiacMatches: ["Scorpio", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Rebirth, Illusion, Transition" },
//         { name: "Bear", type: "Mammal", traits: ["Strong", "Protective", "Introspective"], zodiacMatches: ["Cancer", "Leo"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Strength, Courage, Solitude" },
//         { name: "Bison", type: "Mammal", traits: ["Powerful", "Grounded", "Abundant"], zodiacMatches: ["Taurus", "Capricorn"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Stability, Prosperity, Resilience" },
//         { name: "Boar", type: "Mammal", traits: ["Determined", "Fierce", "Resourceful"], zodiacMatches: ["Aries", "Scorpio"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Courage, Tenacity, Assertiveness" },
//         { name: "Capybara", type: "Mammal", traits: ["Social", "Peaceful", "Adaptable"], zodiacMatches: ["Libra", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Harmony, Community, Relaxation" },
//         { name: "Cat", type: "Mammal", traits: ["Independent", "Curious", "Mysterious"], zodiacMatches: ["Leo", "Scorpio"], generations: ["All"], symbolicMeaning: "Mystery, Independence, Intuition" },
//         { name: "Cheetah", type: "Mammal", traits: ["Fast", "Focused", "Ambitious"], zodiacMatches: ["Aries", "Sagittarius"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Speed, Agility, Determination" },
//         { name: "Deer", type: "Mammal", traits: ["Gentle", "Sensitive", "Graceful"], zodiacMatches: ["Cancer", "Pisces"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Gentleness, Innocence, Intuition" },
//         { name: "Dolphin", type: "Mammal", traits: ["Playful", "Intelligent", "Social"], zodiacMatches: ["Gemini", "Aquarius"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Joy, Harmony, Communication" },
//         { name: "Dog", type: "Mammal", traits: ["Loyal", "Friendly", "Protective"], zodiacMatches: ["Cancer", "Libra"], generations: ["All"], symbolicMeaning: "Loyalty, Companionship, Trust" },
//         { name: "Elephant", type: "Mammal", traits: ["Wise", "Strong", "Loyal"], zodiacMatches: ["Cancer", "Capricorn"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Wisdom, Strength, Memory" },
//         { name: "Fox", type: "Mammal", traits: ["Clever", "Adaptable", "Mysterious"], zodiacMatches: ["Gemini", "Scorpio"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Cunning, Intelligence, Strategy" },
//         { name: "Gorilla", type: "Mammal", traits: ["Strong", "Gentle", "Protective"], zodiacMatches: ["Leo", "Taurus"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Strength, Leadership, Family" },
//         { name: "Hedgehog", type: "Mammal", traits: ["Defensive", "Resourceful", "Gentle"], zodiacMatches: ["Virgo", "Capricorn"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Protection, Resilience, Humility" },
//         { name: "Horse", type: "Mammal", traits: ["Free-spirited", "Strong", "Energetic"], zodiacMatches: ["Sagittarius", "Aries"], generations: ["All"], symbolicMeaning: "Freedom, Power, Adventure" },
//         { name: "Hyena", type: "Mammal", traits: ["Resourceful", "Adaptable", "Mischievous"], zodiacMatches: ["Scorpio", "Gemini"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Survival, Cunning, Humor" },
//         { name: "Jaguar", type: "Mammal", traits: ["Powerful", "Mysterious", "Fearless"], zodiacMatches: ["Scorpio", "Leo"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Strength, Mystery, Leadership" },
//         { name: "Koala", type: "Mammal", traits: ["Calm", "Gentle", "Resilient"], zodiacMatches: ["Cancer", "Taurus"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Relaxation, Peace, Adaptability" },
//         { name: "Leopard", type: "Mammal", traits: ["Stealthy", "Confident", "Independent"], zodiacMatches: ["Leo", "Scorpio"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Agility, Confidence, Mystery" },
//         { name: "Lion", type: "Mammal", traits: ["Courageous", "Regal", "Leader"], zodiacMatches: ["Leo", "Aries"], generations: ["All"], symbolicMeaning: "Strength, Leadership, Majesty" },
//         { name: "Lynx", type: "Mammal", traits: ["Mysterious", "Intuitive", "Independent"], zodiacMatches: ["Scorpio", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Secrets, Intuition, Perception" },
//         { name: "Meerkat", type: "Mammal", traits: ["Social", "Alert", "Cooperative"], zodiacMatches: ["Gemini", "Libra"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Community, Vigilance, Teamwork" },
//         { name: "Monkey", type: "Mammal", traits: ["Playful", "Curious", "Intelligent"], zodiacMatches: ["Gemini", "Aquarius"], generations: ["All"], symbolicMeaning: "Curiosity, Fun, Adaptability" },
//         { name: "Moose", type: "Mammal", traits: ["Strong", "Majestic", "Independent"], zodiacMatches: ["Taurus", "Capricorn"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Strength, Confidence, Solitude" },
//         { name: "Mouse", type: "Mammal", traits: ["Resourceful", "Adaptable", "Curious"], zodiacMatches: ["Virgo", "Cancer"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Resourcefulness, Humility, Attention to Detail" },
//         { name: "Orca", type: "Mammal", traits: ["Powerful", "Intelligent", "Social"], zodiacMatches: ["Scorpio", "Pisces"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Strength, Family, Intelligence" },
//         { name: "Otter", type: "Mammal", traits: ["Playful", "Social", "Curious"], zodiacMatches: ["Gemini", "Aquarius"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Joy, Playfulness, Adaptability" },
//         { name: "Panda", type: "Mammal", traits: ["Gentle", "Peaceful", "Resilient"], zodiacMatches: ["Taurus", "Cancer"], generations: ["All"], symbolicMeaning: "Peace, Balance, Harmony" },
//         { name: "Panther", type: "Mammal", traits: ["Mysterious", "Powerful", "Elegant"], zodiacMatches: ["Scorpio", "Leo"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Mystery, Power, Grace" },
//         { name: "Platypus", type: "Mammal", traits: ["Unique", "Adaptable", "Mysterious"], zodiacMatches: ["Aquarius", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Uniqueness, Adaptability, Mystery" },
//         { name: "Polar Bear", type: "Mammal", traits: ["Strong", "Resilient", "Protective"], zodiacMatches: ["Capricorn", "Scorpio"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Survival, Strength, Solitude" },
//         { name: "Porcupine", type: "Mammal", traits: ["Defensive", "Gentle", "Resourceful"], zodiacMatches: ["Virgo", "Capricorn"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Protection, Boundaries, Resilience" },
//         { name: "Raccoon", type: "Mammal", traits: ["Clever", "Adaptable", "Mischievous"], zodiacMatches: ["Gemini", "Scorpio"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Curiosity, Resourcefulness, Playfulness" },
//         { name: "Rhino", type: "Mammal", traits: ["Strong", "Grounded", "Protective"], zodiacMatches: ["Taurus", "Leo"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Strength, Stability, Resilience" },
//         { name: "Sloth", type: "Mammal", traits: ["Relaxed", "Patient", "Gentle"], zodiacMatches: ["Taurus", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Relaxation, Patience, Mindfulness" },
//         { name: "Squirrel", type: "Mammal", traits: ["Resourceful", "Energetic", "Prepared"], zodiacMatches: ["Virgo", "Capricorn"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Preparation, Resourcefulness, Adaptability" },
//         { name: "Tiger", type: "Mammal", traits: ["Powerful", "Confident", "Fearless"], zodiacMatches: ["Leo", "Aries"], generations: ["All"], symbolicMeaning: "Strength, Courage, Passion" },
//         { name: "Unicorn", type: "Mythical Mammal", traits: ["Magical", "Pure", "Unique"], zodiacMatches: ["Pisces", "Libra"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Magic, Purity, Imagination" },
//         { name: "Whale", type: "Mammal", traits: ["Wise", "Emotional", "Majestic"], zodiacMatches: ["Cancer", "Pisces"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Wisdom, Depth, Communication" },
//         { name: "Wolf", type: "Mammal", traits: ["Loyal", "Intuitive", "Wild"], zodiacMatches: ["Scorpio", "Aries"], generations: ["All"], symbolicMeaning: "Loyalty, Instinct, Freedom" },
//         { name: "Wombat", type: "Mammal", traits: ["Grounded", "Resilient", "Protective"], zodiacMatches: ["Taurus", "Capricorn"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Stability, Endurance, Protection" },
        
//         // 🐍 Reptiles
//         { name: "Chameleon", type: "Reptile", traits: ["Adaptable", "Mysterious", "Patient"], zodiacMatches: ["Gemini", "Scorpio"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Adaptability, Transformation, Perception" },
//         { name: "Dragon", type: "Mythical Reptile", traits: ["Powerful", "Majestic", "Mystical"], zodiacMatches: ["Leo", "Sagittarius"], generations: ["All"], symbolicMeaning: "Power, Wisdom, Magic" },
//         { name: "Gecko", type: "Reptile", traits: ["Resilient", "Adaptable", "Resourceful"], zodiacMatches: ["Virgo", "Capricorn"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Survival, Adaptability, Regeneration" },
//         { name: "Black Mamba", type: "Reptile", traits: ["Fast", "Fierce", "Mysterious"], zodiacMatches: ["Scorpio", "Aries"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Speed, Danger, Transformation" },
//         { name: "Cobra", type: "Reptile", traits: ["Powerful", "Intense", "Protective"], zodiacMatches: ["Scorpio", "Leo"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Power, Protection, Rebirth" },
//         { name: "Crocodile", type: "Reptile", traits: ["Patient", "Strong", "Survivor"], zodiacMatches: ["Taurus", "Capricorn"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Patience, Strength, Stealth" },
//         { name: "Komodo Dragon", type: "Reptile", traits: ["Fierce", "Dominant", "Resilient"], zodiacMatches: ["Aries", "Scorpio"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Strength, Dominance, Survival" },
//         { name: "Viper", type: "Reptile", traits: ["Cunning", "Dangerous", "Mysterious"], zodiacMatches: ["Scorpio", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Danger, Transformation, Mystery" },
//         { name: "Tortoise", type: "Reptile", traits: ["Wise", "Patient", "Grounded"], zodiacMatches: ["Taurus", "Capricorn"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Wisdom, Longevity, Stability" },
        
//         // 🐠 Fish
//         { name: "Clownfish", type: "Fish", traits: ["Social", "Adaptable", "Joyful"], zodiacMatches: ["Gemini", "Libra"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Joy, Adaptability, Teamwork" },
//         { name: "Jellyfish", type: "Fish", traits: ["Graceful", "Mysterious", "Adaptable"], zodiacMatches: ["Pisces", "Cancer"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Flow, Adaptability, Mystery" },
//         { name: "Octopus", type: "Fish", traits: ["Intelligent", "Creative", "Flexible"], zodiacMatches: ["Gemini", "Scorpio"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Intelligence, Mystery, Regeneration" },
//         { name: "Piranha", type: "Fish", traits: ["Fierce", "Determined", "Opportunistic"], zodiacMatches: ["Aries", "Scorpio"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Power, Survival, Focus" },
//         { name: "Seahorse", type: "Fish", traits: ["Gentle", "Patient", "Unique"], zodiacMatches: ["Cancer", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Patience, Fatherhood, Grace" },
//         { name: "Shark", type: "Fish", traits: ["Powerful", "Fearless", "Dominant"], zodiacMatches: ["Leo", "Scorpio"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Strength, Authority, Survival" },
//         { name: "Starfish", type: "Fish", traits: ["Resilient", "Regenerative", "Balanced"], zodiacMatches: ["Libra", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Healing, Renewal, Harmony" },
//         { name: "Stingray", type: "Fish", traits: ["Graceful", "Mysterious", "Protective"], zodiacMatches: ["Scorpio", "Pisces"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Grace, Mystery, Defense" },
//         { name: "Swordfish", type: "Fish", traits: ["Focused", "Ambitious", "Powerful"], zodiacMatches: ["Aries", "Capricorn"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Focus, Strength, Precision" },
//         { name: "Kraken", type: "Mythical Fish", traits: ["Powerful", "Mysterious", "Destructive"], zodiacMatches: ["Scorpio", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Chaos, Power, Mystery" },
            
//         // 🦕 Amphibians
//         { name: "Axolotl", type: "Amphibian", traits: ["Regenerative", "Unique", "Mysterious"], zodiacMatches: ["Scorpio", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Regeneration, Adaptability, Mystery" },
//         { name: "Frog", type: "Amphibian", traits: ["Transformative", "Adaptable", "Resilient"], zodiacMatches: ["Cancer", "Scorpio"], generations: ["All"], symbolicMeaning: "Transformation, Renewal, Cleansing" },
//         { name: "Loch Ness Monster", type: "Mythical Amphibian", traits: ["Mysterious", "Elusive", "Legendary"], zodiacMatches: ["Pisces", "Scorpio"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Mystery, Legend, Intrigue" },
//         { name: "Salamander", type: "Amphibian", traits: ["Resilient", "Fiery", "Mystical"], zodiacMatches: ["Aries", "Scorpio"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Transformation, Fire, Rebirth" },
            
//         // 🐛 Insects
//         { name: "Ant", type: "Insect", traits: ["Hardworking", "Organized", "Team Player"], zodiacMatches: ["Virgo", "Capricorn"], generations: ["All"], symbolicMeaning: "Diligence, Patience, Teamwork" },
//         { name: "Bee", type: "Insect", traits: ["Industrious", "Social", "Productive"], zodiacMatches: ["Taurus", "Virgo"], generations: ["All"], symbolicMeaning: "Community, Hard Work, Sweetness" },
//         { name: "Butterfly", type: "Insect", traits: ["Transformative", "Graceful", "Free-spirited"], zodiacMatches: ["Gemini", "Pisces"], generations: ["All"], symbolicMeaning: "Transformation, Beauty, Freedom" },
//         { name: "Beetle", type: "Insect", traits: ["Resilient", "Strong", "Adaptable"], zodiacMatches: ["Scorpio", "Taurus"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Strength, Persistence, Renewal" },
//         { name: "Wasp", type: "Insect", traits: ["Fierce", "Protective", "Determined"], zodiacMatches: ["Aries", "Scorpio"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Aggression, Defense, Focus" },
//         { name: "Dragonfly", type: "Insect", traits: ["Adaptable", "Energetic", "Visionary"], zodiacMatches: ["Gemini", "Aquarius"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Change, Clarity, Illusion" },
//         { name: "Firefly", type: "Insect", traits: ["Illuminating", "Magical", "Hopeful"], zodiacMatches: ["Leo", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Light, Inspiration, Magic" },
//         { name: "Grasshopper", type: "Insect", traits: ["Energetic", "Adventurous", "Optimistic"], zodiacMatches: ["Sagittarius", "Gemini"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Leaping Forward, Joy, Abundance" },
//         { name: "Ladybug", type: "Insect", traits: ["Lucky", "Gentle", "Protective"], zodiacMatches: ["Cancer", "Libra"], generations: ["All"], symbolicMeaning: "Good Fortune, Protection, Kindness" },
//         { name: "Moth", type: "Insect", traits: ["Mysterious", "Intuitive", "Resilient"], zodiacMatches: ["Scorpio", "Pisces"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Intuition, Mystery, Transformation" },
//         { name: "Scorpion", type: "Insect", traits: ["Intense", "Protective", "Mysterious"], zodiacMatches: ["Scorpio", "Aries"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Power, Defense, Mystery" },
//         { name: "Tarantula", type: "Insect", traits: ["Patient", "Mysterious", "Powerful"], zodiacMatches: ["Scorpio", "Capricorn"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Patience, Mystery, Strength" },
//         { name: "Dung Beetle", type: "Insect", traits: ["Resourceful", "Persistent", "Grounded"], zodiacMatches: ["Taurus", "Virgo"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Resourcefulness, Persistence, Renewal" },
            
//          // 🧑 Human
//         {
//         name: "Human", type: "Mammal", traits: ["Both", "Intelligent", "Adaptable", "Leader", "Survivor"], zodiacMatches: ["All"], generations: ["All"], symbolicMeaning: "Consciousness, Evolution, Creativity"
//         },
            
//         // 🌿 Plant
//         { name: "Bamboo", type: "Plant", traits: ["Resilient", "Flexible", "Strong"], zodiacMatches: ["Sagittarius", "Capricorn"], generations: ["All"], symbolicMeaning: "Resilience, Growth, Adaptability" },
//         { name: "Dandelion", type: "Plant", traits: ["Resilient", "Free-spirited", "Hopeful"], zodiacMatches: ["Gemini", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Hope, Freedom, Persistence" },
//         { name: "Baobab", type: "Plant", traits: ["Strong", "Enduring", "Nurturing"], zodiacMatches: ["Taurus", "Leo"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Strength, Longevity, Wisdom" },
//         { name: "Yggdrasil", type: "Mythical Plant", traits: ["Eternal", "Connecting", "Sacred"], zodiacMatches: ["Aquarius", "Pisces"], generations: ["All"], symbolicMeaning: "Cosmic Connection, Life, Eternity" },
        
//     ]

//     function displayQuestion() {
//         const questionContainer = document.getElementById("question-container");
//         questionContainer.innerHTML = "";

//         const question = questions[currentQuestionIndex];
//         const label = document.createElement("label");
//         label.textContent = question.text;
//         questionContainer.appendChild(label);

//         let input;
//         if (question.type === "text") {
//             input = document.createElement("input");
//             input.type = "text";
//         } else if (question.type === "date") {
//             input = document.createElement("input");
//             input.type = "date";
//         } else if (question.type === "number") {
//             input = document.createElement("input");
//             input.type = "number";
//         } else if (question.type === "boolean") {
//             input = document.createElement("select");
//             ["Yes", "No"].forEach(optionText => {
//                 const option = document.createElement("option");
//                 option.value = optionText;
//                 option.textContent = optionText;
//                 input.appendChild(option);
//             });
//         } else if (question.type === "choice") {
//             input = document.createElement("select");
//             question.options.forEach(optionText => {
//                 const option = document.createElement("option");
//                 option.value = optionText;
//                 option.textContent = optionText;
//                 input.appendChild(option);
//             });
//         }

//         input.id = "quiz-input";
//         questionContainer.appendChild(input);

//         const button = document.createElement("button");
//         button.textContent = currentQuestionIndex === questions.length - 1 ? "Finish" : "Next";
//         button.addEventListener("click", nextQuestion);
//         questionContainer.appendChild(button);
//     }

//     function nextQuestion() {
//         const input = document.getElementById("quiz-input");
//         userAnswers[questions[currentQuestionIndex].key] = input.value;

//         if (currentQuestionIndex < questions.length - 1) {
//             currentQuestionIndex++;
//             displayQuestion();
//         } else {
//             determineSpiritAnimal();
//         }
//     }

//     function determineSpiritAnimal() {
//         document.getElementById("question-container").innerHTML = "<h2>Processing your results...</h2>";
//     }

//     displayQuestion();
// });

document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        { text: "What is your name?", type: "text", key: "name" },
        { text: "Is your name based on the Bible?", type: "boolean", key: "nameOrigin" },
        { text: "What is your birthdate?", type: "date", key: "birthDate" },
        { text: "What is your birth year?", type: "number", key: "birthYear" },
        { text: "Are you a night or day person?", type: "choice", key: "timeOfDay", options: ["Night", "Day"] },
        { text: "Would you choose to breathe underwater, fly, or remain as you are?", type: "choice", key: "abilityChoice", options: ["Breathe underwater", "Fly", "Remain as I am"] },
        { text: "Would you rather be a ruler of a nation or be free, not shackled to anything?", type: "choice", key: "rulerOrFree", options: ["Ruler", "Free"] },
        { text: "Would you rather be a Carnivore, Herbivore, or Omnivore?", type: "choice", key: "diet", options: ["Carnivore", "Herbivore", "Omnivore"] },
        { text: "What kind of environment do you thrive in?", type: "choice", key: "environment", options: ["Forest", "Desert", "Mountains", "City", "Ocean", "Plains"] },
        { text: "Would you prefer being alone most of your life or surrounded by people?", type: "choice", key: "socialPreference", options: ["Alone", "Surrounded by people"] },
        { text: "Do you naturally take charge in group situations, or do you prefer to follow others' lead?", type: "choice", key: "leadership", options: ["Take charge", "Follow others' lead"] },
        { text: "What season do you thrive in?", type: "choice", key: "season", options: ["Spring", "Summer", "Fall", "Winter"] },
        { text: "Which trait defines you the most?", type: "choice", key: "mainTrait", options: ["Independence", "Empathy", "Curiosity", "Wisdom", "Perseverance"] },
        { text: "If you had to rely on just one of your senses, what would it be?", type: "choice", key: "sense", options: ["Hearing", "Smell", "Eyesight", "Sixth sense"] },
        { text: "When you take on a task, you like to get it done...?", type: "choice", key: "taskApproach", options: ["Your way", "In a team", "As soon as possible"] },
        { text: "Faced with an unusual situation...", type: "choice", key: "unusualSituation", options: ["React immediately", "Think before acting", "Get around the problem"] },
        { text: "Faced with important choices in life...", type: "choice", key: "lifeChoices", options: ["Don't like to choose", "Call loved ones", "Decide on my own"] },
        { text: "People are often surprised by your...", type: "choice", key: "firstImpression", options: ["Charisma", "Mind", "Speed", "Curiosity", "I don't know"] },
        { text: "Your seductive trump card?", type: "choice", key: "seduction", options: ["Confidence", "Mystery", "Intelligence", "Determination", "I don't know"] },
        { text: "Your ideal vacation?", type: "choice", key: "vacation", options: ["Relax with family", "Beach parties", "Backpacking and sightseeing"] },
        { text: "Which describes you more?", type: "choice", key: "personality", options: ["Sensible", "Peaceful", "Curious", "Courageous", "Creative"] },
        { text: "Most important objective?", type: "choice", key: "objective", options: ["Fame", "Wealth", "Love", "Peace"] },
        { text: "Your ambition?", type: "choice", key: "ambition", options: ["Fulfill dreams", "Enjoy life", "Be a leader in major projects"] },
        { text: "Which major animal do you identify with?", type: "choice", key: "animalType", options: ["Bird", "Mammal", "Reptile", "Fish", "Amphibian"] },
        { text: "Which superpower would you choose?", type: "choice", key: "superpower", options: ["Super strength", "Super speed", "Flight", "X-ray vision"] },
        { text: "Which element do you feel connected to?", type: "choice", key: "element", options: ["Fire", "Water", "Wind", "Earth"] }
    ];

    const animalData = [
    // 🦉 Birds
        { name: "Eagle", type: "Bird", traits: ["Visionary", "Independent", "Strong-willed"], zodiacMatches: ["Aries", "Scorpio"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Leadership, Freedom, Perspective" },
        { name: "Hawk", type: "Bird", traits: ["Focused", "Strategic", "Determined"], zodiacMatches: ["Aries", "Sagittarius"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Vision, Clarity, Purpose" },
        { name: "Raven", type: "Bird", traits: ["Mysterious", "Curious", "Stealthy"], zodiacMatches: ["Scorpio", "Aquarius"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Mysticism, Intelligence, Transformation" },
        { name: "Owl", type: "Bird", traits: ["Wise", "Intuitive", "Stealthy"], zodiacMatches: ["Capricorn", "Pisces"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Wisdom, Mystery, Perception" },
        { name: "Phoenix", type: "Bird", traits: ["Resilient", "Transformative", "Immortal"], zodiacMatches: ["Leo", "Sagittarius"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Rebirth, Fire, Renewal" },
        { name: "Albatross", type: "Bird", traits: ["Navigator", "Longevity", "Graceful"], zodiacMatches: ["Sagittarius", "Aquarius"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Freedom, Endurance, Journey" },
        { name: "Hummingbird", type: "Bird", traits: ["Energetic", "Joyful", "Agile"], zodiacMatches: ["Gemini", "Virgo"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Lightness, Adaptability, Happiness" },
        { name: "Kingfisher", type: "Bird", traits: ["Precise", "Focused", "Resilient"], zodiacMatches: ["Scorpio", "Capricorn"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Patience, Precision, Prosperity" },
        { name: "Osprey", type: "Bird", traits: ["Hunter", "Strong", "Determined"], zodiacMatches: ["Aries", "Leo"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Power, Focus, Victory" },
        { name: "Parrot", type: "Bird", traits: ["Communicative", "Social", "Intelligent"], zodiacMatches: ["Gemini", "Libra"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Expression, Vibrancy, Adaptability" },
        { name: "Penguin", type: "Bird", traits: ["Resilient", "Loyal", "Adaptable"], zodiacMatches: ["Cancer", "Capricorn"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Survival, Community, Endurance" },
        { name: "Griffin", type: "Mythical Bird", traits: ["Guardian", "Regal", "Mighty"], zodiacMatches: ["Leo", "Aries"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Power, Honor, Nobility" },
        { name: "Rooster", type: "Bird", traits: ["Proud", "Vocal", "Alert"], zodiacMatches: ["Leo", "Virgo"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Confidence, Vigilance, Hard Work" },
        { name: "Stork", type: "Bird", traits: ["Nurturing", "Migratory", "Hopeful"], zodiacMatches: ["Cancer", "Libra"], generations: ["Boomers", "Gen X"], symbolicMeaning: "New Beginnings, Family, Luck" },
        { name: "Vulture", type: "Bird", traits: ["Patient", "Survivor", "Resourceful"], zodiacMatches: ["Scorpio", "Capricorn"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Transformation, Cleansing, Renewal" },
        { name: "Woodpecker", type: "Bird", traits: ["Persistent", "Determined", "Rhythmic"], zodiacMatches: ["Taurus", "Cancer"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Opportunity, Determination, Awareness" },
        { name: "Dove", type: "Bird", traits: ["Peaceful", "Loving", "Gentle"], zodiacMatches: ["Libra", "Pisces"], generations: ["All"], symbolicMeaning: "Peace, Love, Harmony" },
        
        // 🦁 Mammals
        { name: "Armadillo", type: "Mammal", traits: ["Protective", "Resilient", "Adaptable"], zodiacMatches: ["Taurus", "Scorpio"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Defense, Boundaries, Survival" },
        { name: "Bat", type: "Mammal", traits: ["Mysterious", "Intuitive", "Nocturnal"], zodiacMatches: ["Scorpio", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Rebirth, Illusion, Transition" },
        { name: "Bear", type: "Mammal", traits: ["Strong", "Protective", "Introspective"], zodiacMatches: ["Cancer", "Leo"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Strength, Courage, Solitude" },
        { name: "Bison", type: "Mammal", traits: ["Powerful", "Grounded", "Abundant"], zodiacMatches: ["Taurus", "Capricorn"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Stability, Prosperity, Resilience" },
        { name: "Boar", type: "Mammal", traits: ["Determined", "Fierce", "Resourceful"], zodiacMatches: ["Aries", "Scorpio"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Courage, Tenacity, Assertiveness" },
        { name: "Capybara", type: "Mammal", traits: ["Social", "Peaceful", "Adaptable"], zodiacMatches: ["Libra", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Harmony, Community, Relaxation" },
        { name: "Cat", type: "Mammal", traits: ["Independent", "Curious", "Mysterious"], zodiacMatches: ["Leo", "Scorpio"], generations: ["All"], symbolicMeaning: "Mystery, Independence, Intuition" },
        { name: "Cheetah", type: "Mammal", traits: ["Fast", "Focused", "Ambitious"], zodiacMatches: ["Aries", "Sagittarius"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Speed, Agility, Determination" },
        { name: "Deer", type: "Mammal", traits: ["Gentle", "Sensitive", "Graceful"], zodiacMatches: ["Cancer", "Pisces"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Gentleness, Innocence, Intuition" },
        { name: "Dolphin", type: "Mammal", traits: ["Playful", "Intelligent", "Social"], zodiacMatches: ["Gemini", "Aquarius"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Joy, Harmony, Communication" },
        { name: "Dog", type: "Mammal", traits: ["Loyal", "Friendly", "Protective"], zodiacMatches: ["Cancer", "Libra"], generations: ["All"], symbolicMeaning: "Loyalty, Companionship, Trust" },
        { name: "Elephant", type: "Mammal", traits: ["Wise", "Strong", "Loyal"], zodiacMatches: ["Cancer", "Capricorn"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Wisdom, Strength, Memory" },
        { name: "Fox", type: "Mammal", traits: ["Clever", "Adaptable", "Mysterious"], zodiacMatches: ["Gemini", "Scorpio"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Cunning, Intelligence, Strategy" },
        { name: "Gorilla", type: "Mammal", traits: ["Strong", "Gentle", "Protective"], zodiacMatches: ["Leo", "Taurus"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Strength, Leadership, Family" },
        { name: "Hedgehog", type: "Mammal", traits: ["Defensive", "Resourceful", "Gentle"], zodiacMatches: ["Virgo", "Capricorn"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Protection, Resilience, Humility" },
        { name: "Horse", type: "Mammal", traits: ["Free-spirited", "Strong", "Energetic"], zodiacMatches: ["Sagittarius", "Aries"], generations: ["All"], symbolicMeaning: "Freedom, Power, Adventure" },
        { name: "Hyena", type: "Mammal", traits: ["Resourceful", "Adaptable", "Mischievous"], zodiacMatches: ["Scorpio", "Gemini"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Survival, Cunning, Humor" },
        { name: "Jaguar", type: "Mammal", traits: ["Powerful", "Mysterious", "Fearless"], zodiacMatches: ["Scorpio", "Leo"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Strength, Mystery, Leadership" },
        { name: "Koala", type: "Mammal", traits: ["Calm", "Gentle", "Resilient"], zodiacMatches: ["Cancer", "Taurus"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Relaxation, Peace, Adaptability" },
        { name: "Leopard", type: "Mammal", traits: ["Stealthy", "Confident", "Independent"], zodiacMatches: ["Leo", "Scorpio"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Agility, Confidence, Mystery" },
        { name: "Lion", type: "Mammal", traits: ["Courageous", "Regal", "Leader"], zodiacMatches: ["Leo", "Aries"], generations: ["All"], symbolicMeaning: "Strength, Leadership, Majesty" },
        { name: "Lynx", type: "Mammal", traits: ["Mysterious", "Intuitive", "Independent"], zodiacMatches: ["Scorpio", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Secrets, Intuition, Perception" },
        { name: "Meerkat", type: "Mammal", traits: ["Social", "Alert", "Cooperative"], zodiacMatches: ["Gemini", "Libra"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Community, Vigilance, Teamwork" },
        { name: "Monkey", type: "Mammal", traits: ["Playful", "Curious", "Intelligent"], zodiacMatches: ["Gemini", "Aquarius"], generations: ["All"], symbolicMeaning: "Curiosity, Fun, Adaptability" },
        { name: "Moose", type: "Mammal", traits: ["Strong", "Majestic", "Independent"], zodiacMatches: ["Taurus", "Capricorn"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Strength, Confidence, Solitude" },
        { name: "Mouse", type: "Mammal", traits: ["Resourceful", "Adaptable", "Curious"], zodiacMatches: ["Virgo", "Cancer"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Resourcefulness, Humility, Attention to Detail" },
        { name: "Orca", type: "Mammal", traits: ["Powerful", "Intelligent", "Social"], zodiacMatches: ["Scorpio", "Pisces"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Strength, Family, Intelligence" },
        { name: "Otter", type: "Mammal", traits: ["Playful", "Social", "Curious"], zodiacMatches: ["Gemini", "Aquarius"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Joy, Playfulness, Adaptability" },
        { name: "Panda", type: "Mammal", traits: ["Gentle", "Peaceful", "Resilient"], zodiacMatches: ["Taurus", "Cancer"], generations: ["All"], symbolicMeaning: "Peace, Balance, Harmony" },
        { name: "Panther", type: "Mammal", traits: ["Mysterious", "Powerful", "Elegant"], zodiacMatches: ["Scorpio", "Leo"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Mystery, Power, Grace" },
        { name: "Platypus", type: "Mammal", traits: ["Unique", "Adaptable", "Mysterious"], zodiacMatches: ["Aquarius", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Uniqueness, Adaptability, Mystery" },
        { name: "Polar Bear", type: "Mammal", traits: ["Strong", "Resilient", "Protective"], zodiacMatches: ["Capricorn", "Scorpio"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Survival, Strength, Solitude" },
        { name: "Porcupine", type: "Mammal", traits: ["Defensive", "Gentle", "Resourceful"], zodiacMatches: ["Virgo", "Capricorn"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Protection, Boundaries, Resilience" },
        { name: "Raccoon", type: "Mammal", traits: ["Clever", "Adaptable", "Mischievous"], zodiacMatches: ["Gemini", "Scorpio"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Curiosity, Resourcefulness, Playfulness" },
        { name: "Rhino", type: "Mammal", traits: ["Strong", "Grounded", "Protective"], zodiacMatches: ["Taurus", "Leo"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Strength, Stability, Resilience" },
        { name: "Sloth", type: "Mammal", traits: ["Relaxed", "Patient", "Gentle"], zodiacMatches: ["Taurus", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Relaxation, Patience, Mindfulness" },
        { name: "Squirrel", type: "Mammal", traits: ["Resourceful", "Energetic", "Prepared"], zodiacMatches: ["Virgo", "Capricorn"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Preparation, Resourcefulness, Adaptability" },
        { name: "Tiger", type: "Mammal", traits: ["Powerful", "Confident", "Fearless"], zodiacMatches: ["Leo", "Aries"], generations: ["All"], symbolicMeaning: "Strength, Courage, Passion" },
        { name: "Unicorn", type: "Mythical Mammal", traits: ["Magical", "Pure", "Unique"], zodiacMatches: ["Pisces", "Libra"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Magic, Purity, Imagination" },
        { name: "Whale", type: "Mammal", traits: ["Wise", "Emotional", "Majestic"], zodiacMatches: ["Cancer", "Pisces"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Wisdom, Depth, Communication" },
        { name: "Wolf", type: "Mammal", traits: ["Loyal", "Intuitive", "Wild"], zodiacMatches: ["Scorpio", "Aries"], generations: ["All"], symbolicMeaning: "Loyalty, Instinct, Freedom" },
        { name: "Wombat", type: "Mammal", traits: ["Grounded", "Resilient", "Protective"], zodiacMatches: ["Taurus", "Capricorn"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Stability, Endurance, Protection" },
        
        // 🐍 Reptiles
        { name: "Chameleon", type: "Reptile", traits: ["Adaptable", "Mysterious", "Patient"], zodiacMatches: ["Gemini", "Scorpio"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Adaptability, Transformation, Perception" },
        { name: "Dragon", type: "Mythical Reptile", traits: ["Powerful", "Majestic", "Mystical"], zodiacMatches: ["Leo", "Sagittarius"], generations: ["All"], symbolicMeaning: "Power, Wisdom, Magic" },
        { name: "Gecko", type: "Reptile", traits: ["Resilient", "Adaptable", "Resourceful"], zodiacMatches: ["Virgo", "Capricorn"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Survival, Adaptability, Regeneration" },
        { name: "Black Mamba", type: "Reptile", traits: ["Fast", "Fierce", "Mysterious"], zodiacMatches: ["Scorpio", "Aries"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Speed, Danger, Transformation" },
        { name: "Cobra", type: "Reptile", traits: ["Powerful", "Intense", "Protective"], zodiacMatches: ["Scorpio", "Leo"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Power, Protection, Rebirth" },
        { name: "Crocodile", type: "Reptile", traits: ["Patient", "Strong", "Survivor"], zodiacMatches: ["Taurus", "Capricorn"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Patience, Strength, Stealth" },
        { name: "Komodo Dragon", type: "Reptile", traits: ["Fierce", "Dominant", "Resilient"], zodiacMatches: ["Aries", "Scorpio"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Strength, Dominance, Survival" },
        { name: "Viper", type: "Reptile", traits: ["Cunning", "Dangerous", "Mysterious"], zodiacMatches: ["Scorpio", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Danger, Transformation, Mystery" },
        { name: "Tortoise", type: "Reptile", traits: ["Wise", "Patient", "Grounded"], zodiacMatches: ["Taurus", "Capricorn"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Wisdom, Longevity, Stability" },
        
        // 🐠 Fish
        { name: "Clownfish", type: "Fish", traits: ["Social", "Adaptable", "Joyful"], zodiacMatches: ["Gemini", "Libra"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Joy, Adaptability, Teamwork" },
        { name: "Jellyfish", type: "Fish", traits: ["Graceful", "Mysterious", "Adaptable"], zodiacMatches: ["Pisces", "Cancer"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Flow, Adaptability, Mystery" },
        { name: "Octopus", type: "Fish", traits: ["Intelligent", "Creative", "Flexible"], zodiacMatches: ["Gemini", "Scorpio"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Intelligence, Mystery, Regeneration" },
        { name: "Piranha", type: "Fish", traits: ["Fierce", "Determined", "Opportunistic"], zodiacMatches: ["Aries", "Scorpio"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Power, Survival, Focus" },
        { name: "Seahorse", type: "Fish", traits: ["Gentle", "Patient", "Unique"], zodiacMatches: ["Cancer", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Patience, Fatherhood, Grace" },
        { name: "Shark", type: "Fish", traits: ["Powerful", "Fearless", "Dominant"], zodiacMatches: ["Leo", "Scorpio"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Strength, Authority, Survival" },
        { name: "Starfish", type: "Fish", traits: ["Resilient", "Regenerative", "Balanced"], zodiacMatches: ["Libra", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Healing, Renewal, Harmony" },
        { name: "Stingray", type: "Fish", traits: ["Graceful", "Mysterious", "Protective"], zodiacMatches: ["Scorpio", "Pisces"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Grace, Mystery, Defense" },
        { name: "Swordfish", type: "Fish", traits: ["Focused", "Ambitious", "Powerful"], zodiacMatches: ["Aries", "Capricorn"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Focus, Strength, Precision" },
        { name: "Kraken", type: "Mythical Fish", traits: ["Powerful", "Mysterious", "Destructive"], zodiacMatches: ["Scorpio", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Chaos, Power, Mystery" },
            
        // 🦕 Amphibians
        { name: "Axolotl", type: "Amphibian", traits: ["Regenerative", "Unique", "Mysterious"], zodiacMatches: ["Scorpio", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Regeneration, Adaptability, Mystery" },
        { name: "Frog", type: "Amphibian", traits: ["Transformative", "Adaptable", "Resilient"], zodiacMatches: ["Cancer", "Scorpio"], generations: ["All"], symbolicMeaning: "Transformation, Renewal, Cleansing" },
        { name: "Loch Ness Monster", type: "Mythical Amphibian", traits: ["Mysterious", "Elusive", "Legendary"], zodiacMatches: ["Pisces", "Scorpio"], generations: ["Boomers", "Gen X"], symbolicMeaning: "Mystery, Legend, Intrigue" },
        { name: "Salamander", type: "Amphibian", traits: ["Resilient", "Fiery", "Mystical"], zodiacMatches: ["Aries", "Scorpio"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Transformation, Fire, Rebirth" },
            
        // 🐛 Insects
        { name: "Ant", type: "Insect", traits: ["Hardworking", "Organized", "Team Player"], zodiacMatches: ["Virgo", "Capricorn"], generations: ["All"], symbolicMeaning: "Diligence, Patience, Teamwork" },
        { name: "Bee", type: "Insect", traits: ["Industrious", "Social", "Productive"], zodiacMatches: ["Taurus", "Virgo"], generations: ["All"], symbolicMeaning: "Community, Hard Work, Sweetness" },
        { name: "Butterfly", type: "Insect", traits: ["Transformative", "Graceful", "Free-spirited"], zodiacMatches: ["Gemini", "Pisces"], generations: ["All"], symbolicMeaning: "Transformation, Beauty, Freedom" },
        { name: "Beetle", type: "Insect", traits: ["Resilient", "Strong", "Adaptable"], zodiacMatches: ["Scorpio", "Taurus"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Strength, Persistence, Renewal" },
        { name: "Wasp", type: "Insect", traits: ["Fierce", "Protective", "Determined"], zodiacMatches: ["Aries", "Scorpio"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Aggression, Defense, Focus" },
        { name: "Dragonfly", type: "Insect", traits: ["Adaptable", "Energetic", "Visionary"], zodiacMatches: ["Gemini", "Aquarius"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Change, Clarity, Illusion" },
        { name: "Firefly", type: "Insect", traits: ["Illuminating", "Magical", "Hopeful"], zodiacMatches: ["Leo", "Pisces"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Light, Inspiration, Magic" },
        { name: "Grasshopper", type: "Insect", traits: ["Energetic", "Adventurous", "Optimistic"], zodiacMatches: ["Sagittarius", "Gemini"], generations: ["Gen Z", "Millennials"], symbolicMeaning: "Leaping Forward, Joy, Abundance" },
        { name: "Ladybug", type: "Insect", traits: ["Lucky", "Gentle", "Protective"], zodiacMatches: ["Cancer", "Libra"], generations: ["All"], symbolicMeaning: "Good Fortune, Protection, Kindness" },
        { name: "Moth", type: "Insect", traits: ["Mysterious", "Intuitive", "Resilient"], zodiacMatches: ["Scorpio", "Pisces"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Intuition, Mystery, Transformation" },
        { name: "Scorpion", type: "Insect", traits: ["Intense", "Protective", "Mysterious"], zodiacMatches: ["Scorpio", "Aries"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Power, Defense, Mystery" },
        { name: "Tarantula", type: "Insect", traits: ["Patient", "Mysterious", "Powerful"], zodiacMatches: ["Scorpio", "Capricorn"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Patience, Mystery, Strength" },
        { name: "Dung Beetle", type: "Insect", traits: ["Resourceful", "Persistent", "Grounded"], zodiacMatches: ["Taurus", "Virgo"], generations: ["Gen X", "Millennials"], symbolicMeaning: "Resourcefulness, Persistence, Renewal" },
    ];   
    

    let currentQuestionIndex = 0;
    let userAnswers = {};

    function displayQuestion() {
        const questionContainer = document.getElementById("question-container");
        questionContainer.innerHTML = "";

        const question = questions[currentQuestionIndex];
        const label = document.createElement("label");
        label.textContent = question.text;
        questionContainer.appendChild(label);

        let input;
        if (question.type === "text" || question.type === "date" || question.type === "number") {
            input = document.createElement("input");
            input.type = question.type;
        } else if (question.type === "boolean") {
            input = document.createElement("select");
            ["Yes", "No"].forEach(optionText => {
                const option = document.createElement("option");
                option.value = optionText;
                option.textContent = optionText;
                input.appendChild(option);
            });
        } else if (question.type === "choice") {
            input = document.createElement("select");
            question.options.forEach(optionText => {
                const option = document.createElement("option");
                option.value = optionText;
                option.textContent = optionText;
                input.appendChild(option);
            });
        }

        input.id = "quiz-input";
        questionContainer.appendChild(input);

        const button = document.createElement("button");
        button.textContent = currentQuestionIndex === questions.length - 1 ? "Finish" : "Next";
        button.addEventListener("click", nextQuestion);
        questionContainer.appendChild(button);
    }

    function nextQuestion() {
        const input = document.getElementById("quiz-input");
        userAnswers[questions[currentQuestionIndex].key] = input.value;

        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            determineSpiritAnimal();
        }
    }

    function determineSpiritAnimal() {
        document.getElementById("question-container").innerHTML = "<h2>Processing your results...</h2>";

        setTimeout(() => {
            let selectedAnimal = "Human"; // Default spirit animal

            const matchingAnimals = animalData.filter(animal => 
                animal.type === userAnswers.animalType ||
                animal.element === userAnswers.element
            );

            if (matchingAnimals.length > 0) {
                selectedAnimal = matchingAnimals[Math.floor(Math.random() * matchingAnimals.length)];
            }

            document.getElementById("question-container").innerHTML = `
                <h2>Your Spirit Animal is: ${selectedAnimal.name}!</h2>
                <p><strong>Symbolic Meaning:</strong> ${selectedAnimal.symbolicMeaning}</p>
            `;
        }, 2000);
    }

    displayQuestion();
});
