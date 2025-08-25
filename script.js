document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('certificateForm');
    const rollNoInput = document.getElementById('rollNo');
    const canvas = document.getElementById('certificateCanvas');
    const downloadLink = document.getElementById('downloadLink');
    const certificateResult = document.getElementById('certificateResult');
    const notRegisteredMessage = document.getElementById('notRegisteredMessage');
    if (!canvas.getContext) {
        console.error('Canvas is not supported in this browser');
        return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Could not get 2D context');
        return;
    }
    
// --- YOUR STUDENT DATA IN A SINGLE JAVASCRIPT OBJECT ---
const studentsData = {
    "23A81A4303": "KOTA SRI SAI MAHALSA",
    "23A81A4312": "DHANISETTI RUPA DURGA",
    "23A81A4317": "GARIKIPATI MADHU VARSHINI",
    "23A81A4328": "KOOLI VENKATAESWARA RAO",
    "23A81A6112": "DOKKA CHINNARI",
    "23A81A6121": "GUTTULA SRI LAKSHMI",
    "23A81A6150": "PASALAPUDI CHANDINI",
    "23A81A6156": "SATTI SAI RAMA KRISHNA REDDY",
    "23A81A6163": "VARANASI A L V N S AMRUTHA",
    "23A81A6168": "ADABALA RAMYA",
    "23A81A6175": "BUDAMURI BHANU MADHAVI RAJESWARI",
    "23A81A6187": "GANNENA HANSIKA",
    "23A81A6195": "KANCHARLA HARSHITA",
    "23A81A6196": "KARRI TANUJA REDDY",
    "23A81A61B6": "RAVAADA NAGA GOWTAMI",
    "23A81A61B8": "RUTTALA SUBHASRI",
    "23A81A61C1": "SHAIK FAYAZ AHMED",
    "23A81A61D1": "VINNA VEDA PRIYA SANJANA",
    "24A81A6163": "VELAGALA NAGA SATYA SRI CHANDANA REDDY",
    "24A81A4301": "ACHANTA HARSHINI",
    "24A81A4309": "CHINIMILLI DEVI SRI CHARAN",
    "24A81A4311": "DASARI AJAY KUMAR",
    "24A81A4314": "GADI PAVANI LAKSHMI",
    "24A81A4315": "GADIGATLA AASHRITHA",
    "24A81A4330": "KOLUSU USHA SRI",
    "24A81A4334": "KUDUPUDI HASINI",
    "24A81A4345": "PERUMALLA JYOTHSNA",
    "24A81A4346": "PULLA S R S PHANI NARAYANA",
    "24A81A4349": "SUNDARAPALLI CHARAN PRABHU",
    "24A81A4351": "SOMALANKA SUBRAHMANYA ABHI RAM",
    "24A81A4354": "SATTI ANNAPURNA",
    "24A81A4361": "VANKAYALA MOKSHAJNA SRI VAISHNAVI",
    "24A81A4368": "ALLU HEMA SRIVALLI",
    "24A81A4370": "BANDI ROHITH",
    "24A81A4371": "BHOGISETTY SRI MAHALAKSHMI",
    "24A81A4380": "JAGU UDAY NAGA RAMA KRISHNA",
    "24A81A4389": "KOPALLI BABY VENKATA SAI DHANA SREE",
    "24A81A43A0": "MEDAPATI BHAVYA SRI",
    "24A81A43A4": "MOTUPALLI BALA NAGA PADMA KOMALI",
    "24A81A43A6": "NAKKA DURGA RAMESH",
    "24A81A43C8": "VANKAYALA MANI RATNA MAHIMA",
    "24A81A43D0": "YADLAPALLI SRIHARSHA",
    "24A81A4412": "BOTTA NAVEEN KUMAR",
    "24A81A4424": "GUTHULA VASU TEJA",
    "24A81A4432": "KOLLI ABHISHIKTH",
    "24A81A4460": "TATAVARTHI NISANTH",
    "24A81A4465": "VENKATA SIDHI PATI",
    "24A81A6104": "BACCHU MOHAN CHARAN TEJA",
    "24A81A6108": "BATTINA SAI TEJASRI",
    "24A81A6110": "CHAKKA MOHANA SRILAKSHMI ALEKHYA",
    "24A81A6132": "KARRI PURNIMA",
    "24A81A6152": "RAVURI DIVYA ANU LAKSHMI SRI",
    "24A81A6157": "SRIDHARA NAGA VENKATA SATYA SAI SARANYA",
    "24A81A6159": "TETALI SESHA SAI PAVAN KUMAR REDDY",
    "24A81A6167": "ADABALA VEERA VENKATA GREESHMA SREE",
    "24A81A6169": "ADURI ANITHA",
    "24A81A61A3": "MEDIDI HARSHITHA",
    "24A81A61A4": "MIDDE JAI SURYA",
    "24A81A61A5": "MOHAMMAD AYESHA",
    "24A81A61A6": "MOHAMMAD SAYYAD BAJI",
    "24A81A61A9": "NADIPALLI SRIMANTH KUMAR",
    "24A81A61B4": "PANTHAKANI CHAITANYA SWARUP",
    "24A81A61C0": "RAJAHMUNDRY SRAVANI",
    "24A85A4302": "KOTHAPALLI HARI VENKATA SAI MANI KUMAR",
    "24A85A6107": "SARVASUDHI PRAVEEN SRINIVAS",
    "24A85A6111": "KURELLA JASWANTH NAGA VENKATA GANGADHAR",
    "24A85A6112": "CHERUKU MANOHAR",
    "25A85A4307": "RAVIPATI CHAITANYA RAMAKRISHNA",
    "25A85A4310": "KOTTAPALLI HARI SATYANARAYANA",
    "23A81A6147": "PUTTA SUBRAHMANYAM CHOWDARY",
    "23A81A6109": "CHITTURI SUBRAHMANYA HARSHA VARDHAN",
    "23A81A6151": "PILLA JESSI DORAI RAJ",
    "24A81A4347":"PUVVALASARI REVATHI",
    "24A81A4363": "VELUDUTI DEVIKA SRI MADHURA",
    "25A85A4305": "GUBBALA JASINTHA",
    "23A81A4361": "TALABATTULA JITENDRA SRI",
    "23A81A61C1": "SHAIK FAYAZ AHMED",
    "23A81A6125": "KABOTULA TEJAS SAINADH KUMAR"
};
// -------------------------------------------------------------
// ...existing code...
// -------------------------------------------------------------

    const certificateTemplate = new Image();
    certificateTemplate.onerror = () => {
        console.error('Error loading certificate template image');
        alert('Error: Could not load the certificate template. Please try again later.');
    };
    certificateTemplate.src = 'Blue Gold Elegant Certificate of Participation.png';

    certificateTemplate.onload = () => {
        // Ensure image loaded correctly
        if (certificateTemplate.width === 0 || certificateTemplate.height === 0) {
            console.error('Failed to load certificate template image');
            return;
        }
        canvas.width = certificateTemplate.width;
        canvas.height = certificateTemplate.height;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const rollNo = rollNoInput.value.toUpperCase().trim();

            const name = studentsData[rollNo];
            
            certificateResult.style.display = 'none';
            notRegisteredMessage.style.display = 'none';

            if (name) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(certificateTemplate, 0, 0);

                ctx.font = '50px Baskerville'; 
                ctx.fillStyle = '#000'; 
                ctx.textAlign = 'center';
                
                const textX = canvas.width / 2;
                // DROPPING THE NAME BY 7 PIXELS
                const textY = canvas.height * 0.45 - 7;

                ctx.fillText(name, textX, textY);

                const dataURL = canvas.toDataURL('image/png');
                downloadLink.href = dataURL;
                downloadLink.download = `Angel_One_Investment_Seminar_${name}.png`;
                downloadLink.style.display = 'inline-block';
                certificateResult.style.display = 'block';

            } else {
                notRegisteredMessage.style.display = 'block';
            }
        });
    };
});

