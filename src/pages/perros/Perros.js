import { getAll } from "../../components/perros/Perros";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Razas from "../../components/perros/Razas";
import "../../components/perros/Razas.css"



function Perros(){
    const perros=getAll();
return(
    <div>
       
        <div className="bx-pri">
        <Header />
        <Navbar />
        <main className="bx-mains">
            <h1>Listado de perros</h1>
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 g-4">
                {
                    perros.map(p=>(
                        <Razas p1={p.id}
                        p2={p.thumbnail}
                        p3={p.raza}
                        p4={p.descripcion}
                        p5={p.acercade}
                        p6={p.imagen}
                        p7={p.pais}
                        p8={p.vida}
                        />
                    ))
                }
            </div>
            </main>
            <Footer />
        </div>
        
    
    </div>
    )
}

export default Perros;