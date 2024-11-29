document.addEventListener("DOMContentLoaded", () => {  
    const sections = document.querySelectorAll(".card > div");  

    const revealSection = (entries, observer) => {  
        entries.forEach(entry => {  
            if (entry.isIntersecting) {  
                entry.target.classList.add("visible");  
                observer.unobserve(entry.target);  
            }  
        });  
    };  

    const observer = new IntersectionObserver(revealSection, {  
        threshold: 0.2,  
    });  

    sections.forEach(section => {  
        section.classList.add("hidden");  
        observer.observe(section);  
    });  

    document.getElementById("downloadCv").addEventListener("click", () => {  
        const element = document.getElementById("cv-container");  
        
        const options = {  
            margin: 1,  
            filename: 'Khadija_Chakkour_CV.pdf',  
            image: { type: 'jpeg', quality: 0.98 },  
            html2canvas: { scale: 2 },  
            jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }  
        };  

        html2pdf().set(options).from(element).save();  
    });  

    document.querySelectorAll('.nav-link').forEach(link => {  
        link.addEventListener('click', (e) => {  
            e.preventDefault();  
            const targetId = link.getAttribute('href').substring(1);  
            const targetSection = document.getElementById(targetId);  

            if (targetSection) {  
                targetSection.scrollIntoView({ behavior: 'smooth' });  
            }  
        });  
    });  
});