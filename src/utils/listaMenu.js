import FormContato from "@/view/forms/contato";
import FormObjetivo from "@/view/forms/objetivo";
import FormEducação from "@/view/forms/educacao";
import FormExperiencia from "@/view/forms/experiencia";
import FormHabilidade from "@/view/forms/habilidades";
import ViewCurriculo from "@/view/ViewCurriculo";

export const listaMenu = [
    {
        titulo: "Informações de Contato",
        icone: "person",
        page: <FormContato />
    },
    {
        titulo: "Objetivo Profissional",
        icone: "emoji_objects",
        page: <FormObjetivo />
    },
    {
        titulo: "Educação",
        icone: "school",
        page: <FormEducação />
    },
    {
        titulo: "Experiência Profissional",
        icone: "work",
        page: <FormExperiencia />
    },
    {
        titulo: "Habilidades",
        icone: "star",
        page: <FormHabilidade />
    },
    {
        titulo: "Currículo",
        icone: "description",
        page: <ViewCurriculo />
    }
]