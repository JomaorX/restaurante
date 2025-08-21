import * as React from 'react';

// import components
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout pageTitle="Boynton Beach, FL">
    <div className="w-full h-screen">
      <div className="max-w-screen-md mx-auto px-8 flex flex-col justify-center h-full">
          <h1 className="mb-8 text-lg md:text-2xl font-normal tracking-wider uppercase">A veces, solo necesitas una buena tapa y una copa de vino.</h1>
          <p className="mb-8">
            En España, compartir la comida es más que una costumbre: es una forma de vivir. En Hedén, hemos creado un espacio donde cada plato invita a quedarse, a conversar, y a disfrutar sin prisas. Desde carnes a la brasa hasta pescados frescos a la plancha, pasando por tapas que despiertan recuerdos y arroces que saben a domingo, aquí todo se cocina con cariño y se sirve con orgullo.
          </p>
          <p>
            Y sobre esas “tapas creativas” que probaste en ese sitio con luces de neón y espuma de aguacate… bueno, puedes olvidarte de eso después de probar las nuestras. Podemos contarte lo glorioso que está nuestro codillo confitado o lo sabroso que sale el pulpo a la brasa, pero la verdad es que no lo entenderás hasta que vengas, te sientes, y lo pruebes tú mismo. Hedén no se explica. Se saborea.
          </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
