import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import MyCard from './components/Card'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Header title='Adopta un Perrito'/>
            <div className='galeria'>
                <MyCard 
                    image = 'https://images.pexels.com/photos/220974/pexels-photo-220974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    nombre = 'Baki'
                    descripcion = 'Lleno de energía y listo para jugar. ¡Dale a Baki el hogar amoroso que se merece'
                    texto = 'Husky'
                    colorFondo = 'success'
                />
                <MyCard 
                    image = 'https://images.pexels.com/photos/1485726/pexels-photo-1485726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    nombre = 'Ussop'
                    descripcion = 'Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Ussop parte de tu familia hoy mismo!'
                    texto = 'Poodle'
                    colorFondo = 'primary'
                />
                <MyCard 
                    image = 'https://images.pexels.com/photos/7790405/pexels-photo-7790405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    nombre = 'Yujiro'
                    descripcion = 'Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Goahn y experimenta un amor incondicional!'
                    texto = 'Shar Pei'
                    colorFondo = 'danger'
                />
                <MyCard 
                    image = 'https://images.pexels.com/photos/1000602/pexels-photo-1000602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    nombre = 'Nami'
                    descripcion = 'Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Nami a encontrar su final feliz!'
                    texto = 'Beagle'
                    colorFondo = 'warning'
                />
            </div>
            <Footer 
                textoFooter = 'Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre'
            />
        </>
    )
}

export default App
