const questions = [
    // Attract
    {
        "id": 1,
        "question": "I would have relationships with men.",
        "effect": {
            "attract": 1
        }
    },
    {
        "id": 2,
        "question": "I could imagine myself in a sexual scenario with a man.",
        "effect": {
            "attract": 1
        }
    },
    {
        "id": 3,
        "question": "I find myself attracted to muscular bodies.",
        "effect": {
            "attract": 1
        }
    },
    {
        "id": 4,
        "question": "I feel like the benis only makes it better! (I like dick).",
        "effect": {
            "attract": 1
        }
    },
    {
        "id": 5,
        "question": "I find myself attracted to soft skin, feminine clothing.",
        "effect": {
            "attract": -1
        }
    },
    {
        "id": 6,
        "question": "I could imagine myself in a sexual scenario with a woman.",
        "effect": {
            "attract": -1
        }
    },
    {
        "id": 7,
        "question": "I would have relationships with women.",
        "effect": {
            "attract": -1
        }
    },
    {
        "id": 8,
        "question": "I enjoy admiring both men's and women's physiques equally.",
        "effect": {
            "attract": 0
        }
    },
    {
        "id": 9,
        "question": "I find myself more drawn to traditionally masculine traits.",
        "effect": {
            "attract": 1
        }
    },
    {
        "id": 10,
        "question": "I find myself more drawn to traditionally feminine traits.",
        "effect": {
            "attract": -1
        }
    },
    {
        "id": 41,
        "question": "I could imagine myself in a sexual scenario with someone older or younger than me.",
        "effect": {
            "attract": 0
        }
    },
    {
        "id": 42,
        "question": "I often fantasize about role-playing and costumes when thinking about attraction.",
        "effect": {
            "attract": 1
        }
    },
    {
        "id": 43,
        "question": "I find myself more drawn to confidence, charisma, and personality over physical appearance.",
        "effect": {
            "attract": 1
        }
    },

    // Drive
    {
        "id": 11,
        "question": "I sometimes find myself dreaming about lewd scenarios.",
        "effect": {
            "drive": 1
        }
    },
    {
        "id": 12,
        "question": "I would have sex on a regular basis.",
        "effect": {
            "drive": 1
        }
    },
    {
        "id": 13,
        "question": "I masturbate at least once a day.",
        "effect": {
            "drive": 1
        }
    },
    {
        "id": 14,
        "question": "I watch pornographic content.",
        "effect": {
            "drive": 1
        }
    },
    {
        "id": 15,
        "question": "I feel neutral toward sexual activity.",
        "effect": {
            "drive": 0
        }
    },
    {
        "id": 16,
        "question": "I find myself repulsed by the idea of sex.",
        "effect": {
            "drive": -2
        }
    },
    {
        "id": 17,
        "question": "I could say 'chastity' is my virtue.",
        "effect": {
            "drive": -2
        }
    },
    {
        "id": 18,
        "question": "I feel a strong urge to pursue physical intimacy regularly.",
        "effect": {
            "drive": 1
        }
    },
    {
        "id": 19,
        "question": "I feel content without any sexual activity in my life.",
        "effect": {
            "drive": -1
        }
    },
    {
        "id": 44,
        "question": "I find great pleasure in the thought of masturbating.",
        "effect": {
            "drive": 1
        }
    },
    {
        "id": 45,
        "question": "I sometimes feel like my libido is out of control, making it hard for me to ignore sexual urges.",
        "effect": {
            "drive": 1
        }
    },
    {
        "id": 46,
        "question": "I am likely to disregard boundaries if a partner initiates intimacy at the wrong time or place.",
        "effect": {
            "drive": -1
        }
    },

    // Dominant
    {
        "id": 20,
        "question": "I like the idea of having power over someone.",
        "effect": {
            "dominant": 1
        }
    },
    {
        "id": 21,
        "question": "I (would) enjoy someone having control over me.",
        "effect": {
            "dominant": -1
        }
    },
    {
        "id": 22,
        "question": "I wouldn't be comfortable with getting dominated.",
        "effect": {
            "dominant": 1
        }
    },
    {
        "id": 23,
        "question": "I enjoy relationships with a clear power dynamic.",
        "effect": {
            "dominant": 1
        }
    },
    {
        "id": 24,
        "question": "I prefer relationships where power is shared equally.",
        "effect": {
            "dominant": 0
        }
    },
    {
        "id": 25,
        "question": "I like exploring submissive tendencies in relationships.",
        "effect": {
            "dominant": -1
        }
    },
    {
        "id": 47,
        "question": "I prefer taking charge and making decisions regarding sex in a relationship.",
        "effect": {
            "dominant": 1
        }
    },
    {
        "id": 48,
        "question": "I feel immensely excited by the idea of being able to command someone sexually.",
        "effect": {
            "dominant": 1
        }
    },
    {
        "id": 49,
        "question": "I gain immense satisfaction from occasionally engaging in BDSM activities.",
        "effect": {
            "dominant": 1
        }
    },

    // Deviance
    {
        "id": 26,
        "question": "I have frowned-upon kinks/fetishes.",
        "effect": {
            "deviance": 1
        }
    },
    {
        "id": 27,
        "question": "I belong to sub-communities associated with deviances.",
        "effect": {
            "deviance": 1
        }
    },
    {
        "id": 28,
        "question": "I (would) enjoy degrading or getting degraded.",
        "effect": {
            "deviance": 1
        }
    },
    {
        "id": 29,
        "question": "I (would) enjoy inflicting pain or having pain inflicted on me.",
        "effect": {
            "deviance": 1
        }
    },
    {
        "id": 30,
        "question": "I consider myself vanilla.",
        "effect": {
            "deviance": -2
        }
    },
    {
        "id": 31,
        "question": "I find most fetishes disgusting.",
        "effect": {
            "deviance": -1
        }
    },
    {
        "id": 32,
        "question": "I am curious about unconventional sexual preferences.",
        "effect": {
            "deviance": 1
        }
    },
    {
        "id": 33,
        "question": "I avoid exploring anything outside the norm.",
        "effect": {
            "deviance": -1
        }
    },
    {
        "id": 34,
        "question": "I feel most comfortable with light experimentation.",
        "effect": {
            "deviance": 0
        }
    },
    {
        "id": 50,
        "question": "I would find engaging in group sexual encounters thrilling.",
        "effect": {
            "deviance": 1
        }
    },
    {
        "id": 51,
        "question": "I am fascinated by certain aspects of fetishism or bondage, even though I’ve never tried them.",
        "effect": {
            "deviance": 1
        }
    },
    {
        "id": 52,
        "question": "I am intrigued by the taboo nature of some fetishes (e.g., incest, bestiality) but do not necessarily want to act on them.",
        "effect": {
            "deviance": 1
        }
    },

    // Affect
    {
        "id": 35,
        "question": "I could only be lewd to my partner(s).",
        "effect": {
            "affect": 1
        }
    },
    {
        "id": 36,
        "question": "I think sex should be a romantic topic.",
        "effect": {
            "affect": 1
        }
    },
    {
        "id": 37,
        "question": "I am okay with the idea of hook-ups or one-night stands.",
        "effect": {
            "affect": -1
        }
    },
    {
        "id": 38,
        "question": "I believe sex is more about the pleasure than the intimacy.",
        "effect": {
            "affect": -1
        }
    },
    {
        "id": 39,
        "question": "I believe emotional connection is essential for physical intimacy.",
        "effect": {
            "affect": 1
        }
    },
    {
        "id": 40,
        "question": "I think physical pleasure can exist independently of emotional connection.",
        "effect": {
            "affect": -1
        }
    },
    {
        "id": 53,
        "question": "I find sexual activity to be an effective way to relieve stress and anxiety.",
        "effect": {
            "affect": 1
        }
    },
    {
        "id": 54,
        "question": "I am usually aroused by visual stimuli or explicit conversation rather than emotional cues.",
        "effect": {
            "affect": -1
        }
    },
    {
        "id": 55,
        "question": "I notice that my self-esteem often fluctuates based on the approval or praise of sexual partners.",
        "effect": {
            "affect": -1
        }
    }
];
