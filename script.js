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
    "23A81A4309": "CHEKKA ADITHYA VENKATA SAI",
    "23A81A4312": "DHANISETTI RUPA DURGA",
    "23A81A4317": "GARIKIPATI MADHU VARSHINI",
    "23A81A4321": "KADAKATLA MOKSHAGNA SAI TEJA",
    "23A81A4324": "KARRI VENKATA ABHISHEK REDDY",
    "23A81A4328": "KOOLI VENKATAESWARA RAO",
    "23A81A4334": "MUDUNURI CHARAN KRISHNA VARMA",
    "23A81A4335": "MADHYANAPU LAKSHMI",
    "23A81A4339": "MEDIDI SATHVIK",
    "23A81A4341": "MOHAMMAD NASAR ZAMA",
    "23A81A4358": "SHAIK AHMED IRFAN",
    "23A81A4351": "PINDI BHANU PRAKASH",
    "23A81A4359": "SHAIK DUNNAPOTHULA JAHEER HUSSAIN",
    "23A81A4361": "TALABATTULA JITENDRA SRI",
    "23A81A4363": "VANGALAPUDI SANTOSH KUMAR",
    "23A81A4379": "BATHI LEELA KRISHNA",
    "23A81A4383": "CHALLA SATYANARAYANA",
    "23A81A4384": "CHINIMILLI AKHIL SAI PHANIKAR",
    "23A81A4385": "CHUNDRU JANAKI PRIYA LAKSHMI",
    "23A81A4391": "GHANTA JHANSI LAKSHMI",
    "23A81A4393": "GOPISETTI MAHALAKSHMI",
    "23A81A4394": "GRANDHI SRI SWARNA PRIYA",
    "23A81A4395": "GUDIMETLA REKHA VINAYA VENI",
    "23A81A4396": "GUDIMETLA TEJA SRI",
    "23A81A4397": "IBBA DEVENDRA SAGAR",
    "23A81A43A2": "KATAM PRANITHA SRI MOHANA",
    "23A81A43A3": "KATTA ANU SRI",
    "23A81A43A5": "KOMMIREDDY JAHNAVI VEERAVENI",
    "23A81A43A6": "KOPPINEEDI PRANAY KALI KRISHNA SAI",
    "23A81A43A7": "KORLEPARA N J K AYYAPPA",
    "23A81A43B2": "MAKALA BRAMARAMBA NAGA BHUVANA",
    "23A81A43B5": "MEKALA NAVYA",
    "23A81A43B7": "MUPPANA SHANMUKHA",
    "23A81A43C0": "NAVELE NEEHAR",
    "23A81A43D2": "YENDLURI KRUPAUL",
    "23A81A6110": "CHADALAWADA JAIKIRAN",
    "23A81A6112": "DOKKA CHINNARI",
    "23A81A6115": "GADAMSETTI HARINI",
    "23A81A6121": "GUTTULA SRI LAKSHMI",
    "23A81A6133": "KOTHA KARTHIKEYA RAMALINGESWARA GUPTA",
    "23A81A6149": "PALLAPOTHU VENKATA RAGHAVA AVINASH",
    "23A81A6150": "PASALAPUDI CHANDINI",
    "23A81A6152": "POTLA CHITTI BABU",
    "23A81A6156": "SATTI SAI RAMA KRISHNA REDDY",
    "23A81A6160": "TANINKI DURGA NAGA SURYA MOHITH",
    "23A81A6163": "VARANASI A L V N S AMRUTHA",
    "23A81A6167": "APPASANI JITENDRA NAGA SANDEEP",
    "23A81A6168": "ADABALA RAMYA",
    "23A81A6171": "BHARANIKAPULA MURALEE KRISHNA",
    "23A81A6175": "BUDAMURI BHANU MADHAVI RAJESWARI",
    "23A81A6177": "CHERUKU KAVYA",
    "23A81A6183": "DASARI AMULYA",
    "23A81A6185": "DIDLA CHANDRA LOKESH",
    "23A81A6186": "GANDROTHU GANGA SAI NAGA MUNNIJA",
    "23A81A6187": "GANNENA HANSIKA",
    "23A81A6188": "GEDDAM BHARGAV TRIVEN",
    "23A81A6195": "KANCHARLA HARSHITA",
    "23A81A6196": "KARRI TANUJA REDDY",
    "23A81A61A3": "MUDDAM BHARATH LAKSHMI NARASIMHA",
    "23A81A61A5": "MEDIDI CHAKRI",
    "23A81A61A8": "NAMBADA TARUN SRI RAM",
    "23A81A61A9": "PAMARTHI TARUN SAI MANIKANTA",
    "23A81A61B3": "PILLA LAKSHMI PRASANNA",
    "23A81A61B5": "PRAGALLAPATI NAGA RATNA SAI NIKHITHA",
    "23A81A61B6": "RAVAADA NAGA GOWTAMI",
    "23A81A61B8": "RUTTALA SUBHASRI",
    "23A81A61C1": "SHAIK FAYAZ AHMED",
    "23A81A61C3": "SUNKARA GANESH",
    "23A81A61D1": "VINNA VEDA PRIYA SANJANA",
    "24A81A6163": "VELAGALA NAGA SATYA SRI CHANDANA REDDY",
    "24A81A4301": "ACHANTA HARSHINI",
    "24A81A4303": "ADURI TEJASWINI",
    "24A81A4306": "BOGIREDDY SAI KUMAR",
    "24A81A4309": "CHINIMILLI DEVI SRI CHARAN",
    "24A81A4311": "DASARI AJAY KUMAR",
    "24A81A4314": "GADI PAVANI LAKSHMI",
    "24A81A4315": "GADIGATLA AASHRITHA",
    "24A81A4330": "KOLUSU USHA SRI",
    "24A81A4334": "KUDUPUDI HASINI",
    "24A81A4339": "NEKKANTI BHUVANA SAI DEEPTHI",
    "24A81A4340": "NELAPOLU SARAYU",
    "24A81A4345": "PERUMALLA JYOTHSNA",
    "24A81A4346": "PULLA S R S PHANI NARAYANA",
    "24A81A4349": "SUNDARAPALLI CHARAN PRABHU",
    "24A81A4351": "SOMALANKA SUBRAHMANYA ABHI RAM",
    "24A81A4353": "SANAMANDRA VINAY BABU",
    "24A81A4354": "SATTI ANNAPURNA",
    "24A81A4358": "UPPULURI NAGA SAI SRI NAVYAGNA",
    "24A81A4361": "VANKAYALA MOKSHAJNA SRI VAISHNAVI",
    "24A81A4364": "YARLAPATI VENKATA NAGA DURGA TARUN",
    "24A81A4368": "ALLU HEMA SRIVALLI",
    "24A81A4370": "BANDI ROHITH",
    "24A81A4371": "BHOGISETTY SRI MAHALAKSHMI",
    "24A81A4380": "JAGU UDAY NAGA RAMA KRISHNA",
    "24A81A4389": "KOPALLI BABY VENKATA SAI DHANA SREE",
    "24A81A4397": "MALLADI KUSUMA",
    "24A81A43A0": "MEDAPATI BHAVYA SRI",
    "24A81A43A4": "MOTUPALLI BALA NAGA PADMA KOMALI",
    "24A81A43A6": "NAKKA DURGA RAMESH",
    "24A81A43B2": "PAMULA SATISH",
    "24A81A43C8": "VANKAYALA MANI RATNA MAHIMA",
    "24A81A43D0": "YADLAPALLI SRIHARSHA",
    "24A81A4407": "BANDARU RENUKA SAI",
    "24A81A4412": "BOTTA NAVEEN KUMAR",
    "24A81A4424": "GUTHULA VASU TEJA",
    "24A81A4432": "KOLLI ABHISHIKTH",
    "24A81A4460": "TATAVARTHI NISANTH",
    "24A81A4465": "VENKATA SIDHI PATI",
    "24A81A6104": "BACCHU MOHAN CHARAN TEJA",
    "24A81A6108": "BATTINA SAI TEJASRI",
    "24A81A6110": "CHAKKA MOHANA SRILAKSHMI ALEKHYA",
    "24A81A6122": "GOPISETTI SAI SRI AMRUTA",
    "24A81A6132": "KARRI PURNIMA",
    "24A81A6152": "RAVURI DIVYA ANU LAKSHMI SRI",
    "24A81A6157": "SRIDHARA NAGA VENKATA SATYA SAI SARANYA",
    "24A81A6159": "TETALI SESHA SAI PAVAN KUMAR REDDY",
    "24A81A6162": "VATTI LAKSHMI MADHURI",
    "24A81A6167": "ADABALA VEERA VENKATA GREESHMA SREE",
    "24A81A6169": "ADURI ANITHA",
    "24A81A6179": "CHADALAVADA LIKITH KUMAR",
    "24A81A6194": "JAGADALA LIKITHA",
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
    "25A85A4310": "KOTTAPALLI HARI SATYANARAYANA"
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

