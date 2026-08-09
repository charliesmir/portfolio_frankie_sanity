import collection from "./documents/collection";
import artwork from "./documents/artwork";
import contact from "./objects/contact";
import education from "./objects/education";
import exhibition from "./objects/exhibition";
import experience from "./objects/experience";
import artworksSection from "./singletons/artworksSection";
import cvSection from "./singletons/cvSection";
import titleSection from "./singletons/titleSection";
import contactsSection from "./singletons/contactsSection";

export const schemaTypes = [
    contact,
    artwork,
    education,
    exhibition,
    experience,
    collection,
    titleSection,
    artworksSection,
    cvSection,
    contactsSection,
]
