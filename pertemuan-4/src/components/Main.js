import Hello from "./Hello"

/* 
    Membuat Component Main
    Menampilkan konten utama
*/
function Main(){
    // Mengirim props namanya: name
    return(
        <main>
            <Hello name="Ardelingga Pramesta Kusuma" major="Mobile Developer" identity={{
                name: "Ardelingga Pramesta Kusuma",
                major: "Mobile Developer"
            }}/>
            <Hello name="Fajar Dwi Saputra" major="Mobile Developer"/>
            <Hello name="Moh. Sodik Fikri" major="Web Developer"/>
            <Hello name="Rafif Mulya Reswara" major="Web Developer"/>
            <Hello name="Akira Oka" major="Fullstack Developer"/>
        </main>
    )
}

export default Main