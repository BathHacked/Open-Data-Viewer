const councilAdvice = {
    Name: "councilAdvice",
    Title: "Council Help & Advice ",
    Headline: "Shows the location of council advice centres",
    Description: "Shows the location of council advice centres",
    Author: "Leigh Dodds",
    AttributeTags: [
        {   attributeName: "Council Advice",
            attributeTag: "advice_service",
            attributeValues: ["citizens_advice"],
            icon: "hands-helping"
        }
    ],
    overpassQuery: `[out:json];\
        (way["amenity"="advice_service"](around:20000,51.38257, -2.35870);\
        node["amenity"="advice_service"](around:20000,51.38257, -2.35870););\
        out body;>;out skel qt;`,
    mapConfig: {
         mapIcon: "hands-helping",
         color: "blue"
    }
};

const recycling = {
    Name: "recycling",
    Title: "Recycling Centres",
    Headline: "Shows the location of recycling centres",
    Description: "Shows the location of recycling centres",
    Author: "Leigh Dodds",
    AttributeTags: [
    ],
    overpassQuery: `[out:json];\
        (way["recycling_type"="centre"](around:20000,51.38257, -2.35870);\
        node["recycling_type"="centre"](around:20000,51.38257, -2.35870););\
        out body;>;out skel qt;`,
    mapConfig: {
         mapIcon: "recycle",
         color: "green"
    }
};

const food = {
    Name: "food",
    Title: "Community Food Provision",
    Headline: "Shows the location of local food banks and community kitchens",
    Description: "Shows the location of local food banks and community kitchens",
    Author: "Leigh Dodds",
    AttributeTags: [
        {   attributeName: "Food Bank",
            attributeTag: "social_facility",
            attributeValues: ["food_bank"],
            icon: "shopping-basket"
        },
        {   attributeName: "Community Kitchen",
            attributeTag: "social_facility",
            attributeValues: ["soup_kitchen"],
            icon: "utensils"
        },
        {
          attributeName:"Information",
          type:"description",
          attributeTag:"description",
          attributeValues:[],
          icon:"info-circle",
          iconColor:"#6495ED"
        }

    ],
    overpassQuery: `[out:json];\
        (way["social_facility"~"(food_bank|soup_kitchen)$"](around:20000,51.38257, -2.35870);\
        node["social_facility"~"(food_bank|soup_kitchen)$"](around:20000,51.38257, -2.35870););\
        out body;>;out skel qt;`,
    mapConfig: {
         mapIcon: "utensils",
         color: "orange"
    }
};

const digiAccess = {
    Name: "digitalAccess",
    Title: "Community Digital Access",
    Headline: "Shows community locations that provides access to digital Services",
    Description: "This theme shows community locations that provide access to digital services.  These include access to " +
    "printing facilities, access to computers for public use and Wifi / internet access",
    Author: "Leigh Dodds",
    AttributeTags: [
         {  attributeName: "Internet Access",
            attributeTag: "internet_access",
            attributeValues: ["wlan", "yes", "terminal", "wifi", "service"],
            icon: "wifi"
        },
        {   attributeName: "Printing Facilities",
            attributeTag: "digital_access",
            attributeValues: ["printer"],
            icon: "print"
        },
        {   attributeName: "Computer Access",
            attributeTag: "digital_access",
            attributeValues: ["computer"],
            icon: "desktop"
        },
        {   attributeName: "Membership Required",
            attributeTag: "digital_access:membership",
            attributeValues: ["yes"],
            icon: "exclamation",
            iconColor: "red"
        },

    ],
    overpassQuery: `[out:json];\
        (way["amenity"~"(library|community_centre)$"][~"^(internet_access|digital_access)$"~"."](around:20000,51.38257, -2.35870);\
        node["amenity"~"(library|community_centre)$"][~"^(internet_access|digital_access)$"~"."](around:20000,51.38257, -2.35870););\
        out body;>;out skel qt;`,
    mapConfig: {
         mapIcon: "wifi",
         color: "red"
    }
    };

export {
    councilAdvice, food, recycling, digiAccess
};
