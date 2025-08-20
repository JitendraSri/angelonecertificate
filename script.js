document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('certificateForm');
    const rollNoInput = document.getElementById('rollNo');
    const canvas = document.getElementById('certificateCanvas');
    const downloadLink = document.getElementById('downloadLink');
    const certificateResult = document.getElementById('certificateResult');
    const notRegisteredMessage = document.getElementById('notRegisteredMessage');
    const ctx = canvas.getContext('2d');
    
    // --- YOUR STUDENT DATA IN A SINGLE JAVASCRIPT OBJECT ---
const studentsData = {
    "23A81A4303": "KOTA SRI SAI MAHALSA",
    "23A81A4311": "DEVARAPALLI JNANASRI LAKSHMI PRASANNA DURGA",
    "23A81A4327": "KODURI GANGA DHAMANESH",
    "23A81A4339": "MEDIDI SATHVIK",
    "23A81A4356": "SATTI SRI MAHI",
    "23A81A4359": "SHAIK DUNNAPOTHULA JAHEER HUSSAIN",
    "23A81A4361": "TALABATTULA JITENDRA SRI",
    "23A81A4367": "ADAPA NAGA VENKATA DURGAPRASAD",
    "23A81A4370": "AKULA YESU BABU",
    "23A81A4373": "ANISETTI JANAKI SAI PRASANNA",
    "23A81A4376": "BIKKINA NANDINI SRI SAI PURNIMA",
    "23A81A4377": "BANDARU DEVA LAKSHMI NAGA VARSHINI",
    "23A81A4384": "CHINIMILLI AKHIL SAI PHANIKAR",
    "23A81A4396": "GUDIMETLA TEJA SRI",
    "23A81A4397": "IBBA DEVENDRA SAGAR",
    "23A81A4399": "KANCHERLA TEJESWAR",
    "23A81A43A0": "KANNEGOLLA NAGA LAKSHMI RUCHITHA",
    "23A81A43A6": "KOPPINEEDI PRANAY KALI KRISHNA SAI",
    "23A81A43A7": "KORLEPARA N J K AYYAPPA",
    "23A81A43B1": "MADIREDDI NAGA DURGA BHARGAVI",
    "23A81A43B2": "MAKALA BRAMARAMBA NAGA BHUVANA",
    "23A81A43B7": "MUPPANA SHANMUKHA",
    "23A81A43B8": "MUTYALA LEELA PRIYANKA",
    "23A81A43B9": "NARAKULA GAYATRI TRIPURA MADHURI",
    "23A81A43C0": "NAVELE NEEHAR",
    "23A81A43C6": "REDDY NIKHIL SAI TEJA",
    "23A81A43D2": "YENDLURI KRUPAUL",
    "23A81A6103": "BANDREDDY NAVYA SREE",
    "23A81A6109": "CHITTURI SUBRAHMANYA HARSHA VARDHAN",
    "23A81A6110": "CHADALAWADA JAIKIRAN",
    "23A81A6116": "GANTA JAYASAI VINAYA BHARATH",
    "23A81A6123": "KOVVURI HARSHA VARDHAN REDDY",
    "23A81A6125": "KABOTULA TEJAS SAINADH KUMAR",
    "23A81A6141": "MOHAMMED SHEHAAB HAMEED",
    "23A81A6151": "PILLA JESSI DORAI RAJ",
    "23A81A6158": "SHEIK RAMEEZ RAZA",
    "23A81A6167": "APPASANI JITENDRA NAGA SANDEEP",
    "23A81A61A3": "MUDDAM BHARATH LAKSHMI NARASIMHA",
    "23A81A61C3": "SUNKARA GANESH",
    "23A81A61C6": "THOTA RANJITH KUMAR",
    "23A81A61C7": "TUPAKULA CHANDRA SEKHARA RAMARAO",
    "23A81A7129": "Not found in provided lists",
    "24A81A4302": "ADDANKI JAGADEESH KUMAR",
    "24A81A4330": "KOLUSU USHA SRI",
    "24A81A4335": "MULLAPUDI PRADEEP VENKATA SAI",
    "24A81A4347": "PUVVALASARI REVATHI",
    "24A81A4348": "REDDI SAI",
    "24A81A4351": "SOMALANKA SUBRAHMANYA ABHI RAM",
    "24A81A4352": "SAMMINGI LOKESH SAI SUBRAHMANYAM",
    "24A81A4353": "SANAMANDRA VINAY BABU",
    "24A81A4361": "VANKAYALA MOKSHAJNA SRI VAISHNAVI",
    "24A81A4368": "ALLU HEMA SRIVALLI",
    "24A81A4371": "BHOGISETTY SRI MAHALAKSHMI",
    "24A81A4375": "DULAPALLI PAVANI",
    "24A81A4381": "KADAKATLA PAVANI PADMA",
    "24A81A4385": "KANNAJI DHANA BHAVANI",
    "24A81A4386": "KANTETI SRI DURGA MOUNIKA",
    "24A81A4396": "MADASI PRIYA DHARSINI",
    "24A81A4397": "MALLADI KUSUMA",
    "24A81A4398": "MALLESWARAPU BHUVANA SRI VIJAYA",
    "24A81A4399": "MAMUDURI DEVI SRI CHARAN",
    "24A81A43A0": "MEDAPATI BHAVYA SRI",
    "24A81A43A1": "MEDEPALLI SANJAY",
    "24A81A43A2": "METLA MAHALAKSHMI",
    "24A81A43B8": "RAVILISETTY GEETANJALI",
    "24A81A43B9": "RELLI RESHMA",
    "24A81A43C1": "SHAIK SABEENA",
    "24A81A43C7": "VANKAYALA JYOTHI",
    "24A81A43D1": "YEDIDA DEVI UMA MANI ALEKHYA",
    "24A81A4408": "BATHINA PRASAD",
    "24A81A4422": "GODAVARI DURGA SRI SAI DINESH YADAV",
    "24A81A4428": "KALA NAGA SATYA KARTHEEK",
    "24A81A4441": "NAGIREDDY SRIYA SWATHI NAGA SAILAJA",
    "24A81A4446": "PATSA PADMA PRIYA",
    "24A81A4453": "SANKU LAKSHMI ANJANA",
    "24A81A4465": "VENKATA SIDHI PATI",
    "24A81A6122": "GOPISETTI SAI SRI AMRUTA",
    "24A81A6126": "KOYYALA ROHITH VINAY VARMA",
    "24A81A6138": "LINGAPARTHI RUCHITHA SRI",
    "24A81A6144": "NARINA SAI HARSHINI",
    "24A81A6167": "ADABALA VEERA VENKATA GREESHMA SREE",
    "24A81A6170": "ALLAM VENKATA SAI RAM KUMAR",
    "24A81A6178": "BYRRAJU GOPI CHANDANA",
    "24A81A6187": "DUDDUPUDI DURGA GANESH",
    "24A81A61A5": "MOHAMMAD AYESHA",
    "24A81A61B9": "PRADEEP PULI",
    "24A81A61C0": "RAJAHMUNDRY SRAVANI",
    "24A81A61C1": "RAMISETTI ANANTHA NAGA SAI RAM",
    "24A81A61C7": "TIRANDI NIKHIL SRI KRISHNA",
    "24A85A4309": "GOLLAKOTI NIKHIL",
    "24A85A6108": "SAYYED RAHIMUDDIN",
    "24A85A6109": "CHELLINKALA KARUNAKAR",
    "24A85A6111": "KURELLA JASWANTH NAGA VENKATA GANGADHAR",
    "25A85A4307": "RAVIPATI CHAITANYA RAMAKRISHNA",
    "25A85A4407": "VENDANTAM SRI PRAHARSHITA",
    "23A81A6114": "EMANDI JAGADEESH",
    "23A81A4392": "GOPI VIGNESH",
    "23A81A4393": "GOPISETTI MAHALAKSHMI",
    "23A81A43C4": "PATTULA JASHUVA",
    "24A81A6197": "KURICHETI YAMINI",
    "23A81A6160": "TANINKI DURGA NAGA SURYA MOHITH",
    "25A85A4310": "KOTTAPALLI HARI SATYANARAYANA",
  };
    // -------------------------------------------------------------

    const certificateTemplate = new Image();
    certificateTemplate.src = 'Blue Gold Elegant Certificate of Participation.png'; 

    certificateTemplate.onload = () => {
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

                ctx.font = '60px Arial'; 
                ctx.fillStyle = '#000'; 
                ctx.textAlign = 'center';
                
                const textX = canvas.width / 2;
                // DROPPING THE NAME BY 7 PIXELS
                const textY = canvas.height * 0.45 - 45;

                ctx.fillText(name, textX, textY);

                const dataURL = canvas.toDataURL('image/png');
                downloadLink.href = dataURL;
                downloadLink.download = `Python_GitHub_Certificate_${name}.png`;
                downloadLink.style.display = 'inline-block';
                certificateResult.style.display = 'block';

            } else {
                notRegisteredMessage.style.display = 'block';
            }
        });
    };
});
