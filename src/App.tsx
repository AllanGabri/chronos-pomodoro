import { Heading } from './styles/components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
    console.log('Oi');

    return (
        <> 
        {/* podemos utilizar as tags vazias ao inves de usar divs, pois o react só permite um elemento pai */}
           <Heading>Olá mundo!</Heading> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia odit voluptate. Culpa optio voluptatem assumenda nisi voluptate, molestiae magni, ad inventore autem, illum sequi neque deleniti ducimus! Praesentium, sunt?</p>
        </>
    );
}

// export default App; dessa forma eu posso nomear a minha function da maneira que eu desejar
 //dessa forma eu só posso importar usando {App}