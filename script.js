const projects = [
    {
        title: "Assistente Virtual<br>TRIP - Motiva",
        description:
            "Participação no desenvolvimento do projeto TRIP, assistente virtual inteligente voltado à mobilidade urbana. Atuação no front-end da aplicação e apoio em testes e validação de funcionalidades. Projeto destaque no NEXT FIAP, conquistando o 2º lugar entre os melhores projetos da graduação.",
        image: "assets/images/projeto-trip.webp",
        imageAlt: "Imagem do projeto Assistente Virtual TRIP",
        liveUrl: "https://trip-red.vercel.app/",
        githubUrl: "https://github.com/CHAT-TRIP/TRIP"
    },
];

let currentProjectIndex = 0;
let projectChangeTimeout;

const projectTitle = document.querySelector("#project-title");
const projectDescription = document.querySelector("#project-description");
const projectImage = document.querySelector("#project-image");
const projectLiveLink = document.querySelector("#project-live-link");
const projectGithubLink = document.querySelector("#project-github-link");
const previousProjectButton = document.querySelector("#previous-project");
const nextProjectButton = document.querySelector("#next-project");

function updateProjectLink(element, url) {
    const hasValidUrl = Boolean(url && url !== "#");

    element.hidden = !hasValidUrl;

    if (hasValidUrl) {
        element.href = url;
        element.setAttribute("aria-disabled", "false");
    } else {
        element.removeAttribute("href");
        element.setAttribute("aria-disabled", "true");
    }
}

function updateProject() {
    const project = projects[currentProjectIndex];

    window.clearTimeout(projectChangeTimeout);

    projectImage.classList.add("is-changing");

    projectChangeTimeout = window.setTimeout(() => {
        projectTitle.innerHTML = project.title;
        projectDescription.textContent = project.description;

        projectImage.src = project.image;
        projectImage.alt = project.imageAlt;

        updateProjectLink(projectLiveLink, project.liveUrl);
        updateProjectLink(projectGithubLink, project.githubUrl);

        projectImage.classList.remove("is-changing");
    }, 200);
}

function showNextProject() {
    currentProjectIndex =
        (currentProjectIndex + 1) % projects.length;

    updateProject();
}

function showPreviousProject() {
    currentProjectIndex =
        (currentProjectIndex - 1 + projects.length) % projects.length;

    updateProject();
}

if (
    projectTitle &&
    projectDescription &&
    projectImage &&
    projectLiveLink &&
    projectGithubLink &&
    previousProjectButton &&
    nextProjectButton
) {
    nextProjectButton.addEventListener("click", showNextProject);
    previousProjectButton.addEventListener("click", showPreviousProject);

    document.addEventListener("keydown", (event) => {
        const projectsSection = document.querySelector("#projects");
        const activeElement = document.activeElement;

        const isTyping =
            activeElement?.tagName === "INPUT" ||
            activeElement?.tagName === "TEXTAREA";

        if (!projectsSection || isTyping) {
            return;
        }

        const sectionPosition = projectsSection.getBoundingClientRect();
        const sectionIsVisible =
            sectionPosition.top < window.innerHeight &&
            sectionPosition.bottom > 0;

        if (!sectionIsVisible) {
            return;
        }

        if (event.key === "ArrowRight") {
            showNextProject();
        }

        if (event.key === "ArrowLeft") {
            showPreviousProject();
        }
    });

    updateProject();
} else {
    console.error(
        "Não foi possível iniciar o carrossel. Verifique os IDs da seção de projetos no HTML."
    );
}

const certificates = [
    {
        title: "Certificado Qualificação Profissional Prototipação Web",
        image: "assets/images/certificates/qualificação-profissional.webp",
        file: "assets/certificates/qualificação-profissional.pdf"
    },
    {
        title: "Certificado Git e GitHub",
        image: "assets/images/certificates/gitegithub.webp",
        file: "assets/certificates/gitegithub.pdf"
    },
    {
        title: "Certificado Qualificação Profissional Aplicação Móveis",
        image: "assets/images/certificates/qualificação-profissional-II.webp",
        file: "assets/certificates/qualificação-profissional-II.pdf"
    },
    {
        title: "Certificado HTML e CSS: Classes, Posicionamento e Flexbox",
        image: "assets/images/certificates/htmlecssII.webp",
        file: "assets/certificates/htmlecssII.pdf"
    },
    {
        title: "Certificado Cybersecurity",
        image: "assets/images/certificates/cybersecurity.webp",
        file: "assets/certificates/cybersecurity.pdf"
    },
    {
        title: "Certificado Backend em Java",
        image: "assets/images/certificates/backendjava.webp",
        file: "assets/certificates/backendjava.pdf"
    },
    {
        title: "Certificado Chatbots",
        image: "assets/images/certificates/chatbot.webp",
        file: "assets/certificates/chatbot.pdf"
    },
    {
        title: "Certificado Java",
        image: "assets/images/certificates/java.webp",
        file: "assets/certificates/java.pdf"
    },
    {
        title: "Certificado HTML e CSS: Cabeçalho, Footer e Variáveis CSS",
        image: "assets/images/certificates/htmlecss.webp",
        file: "assets/certificates/htmlecss.pdf"
    }
];

let currentCertificateIndex = 0;

const previousCertificateCard = document.querySelector(
    "#certificate-previous"
);

const currentCertificateCard = document.querySelector(
    "#certificate-current"
);

const nextCertificateCard = document.querySelector(
    "#certificate-next"
);

const previousCertificateButton = document.querySelector(
    "#previous-certificate"
);

const nextCertificateButton = document.querySelector(
    "#next-certificate"
);

function getCertificateIndex(index) {
    return (index + certificates.length) % certificates.length;
}

function updateCertificateCard(element, certificate) {
    const image = element.querySelector("img");

    element.href = certificate.file;

    image.src = certificate.image;
    image.alt = certificate.title;

    element.setAttribute(
        "aria-label",
        `Abrir ${certificate.title}`
    );
}

function updateCertificates() {
    const previousIndex = getCertificateIndex(
        currentCertificateIndex - 1
    );

    const nextIndex = getCertificateIndex(
        currentCertificateIndex + 1
    );

    updateCertificateCard(
        previousCertificateCard,
        certificates[previousIndex]
    );

    updateCertificateCard(
        currentCertificateCard,
        certificates[currentCertificateIndex]
    );

    updateCertificateCard(
        nextCertificateCard,
        certificates[nextIndex]
    );
}

function showNextCertificate() {
    currentCertificateIndex = getCertificateIndex(
        currentCertificateIndex + 1
    );

    updateCertificates();
}

function showPreviousCertificate() {
    currentCertificateIndex = getCertificateIndex(
        currentCertificateIndex - 1
    );

    updateCertificates();
}

if (
    previousCertificateCard &&
    currentCertificateCard &&
    nextCertificateCard &&
    previousCertificateButton &&
    nextCertificateButton
) {
    previousCertificateButton.addEventListener(
        "click",
        showPreviousCertificate
    );

    nextCertificateButton.addEventListener(
        "click",
        showNextCertificate
    );

    updateCertificates();
}