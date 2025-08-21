import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about">
    <div className="w-full h-full">
      <StaticImage src="../../images/about/top-border.png" alt="" className="w-full" />
      <div className="bg-[#222] py-4 md:py-0">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, delay: 0.5 }}
        >
          Historia
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          viewport={{ once: true }}
        >
          <div className="max-w-screen-lg w-full grid px-4 sm:grid-cols-2 gap-8 mx-auto text-white">
            <div className="flex justify-center items-center">
              <StaticImage src="../../images/about/bar.jpg" alt="The owners of Edén" className="rounded drop-shadow-lg" />
            </div>
            <div>
              <p className="pb-2">
  Edén nació de una idea sencilla: crear un espacio donde la comida y el ambiente se sintieran como en casa. Sin grandes artificios, sin fusiones innecesarias. Solo platos honestos, ingredientes frescos y una carta pensada para compartir momentos.
</p>
<p className="py-2">
  Cada rincón del local, cada receta y cada detalle están pensados para que vivas una experiencia auténtica. Aquí se cocina con cariño, se sirve con respeto y se recibe con alegría. Edén es ese sitio donde puedes venir a desconectar, brindar, y saborear lo que realmente importa.
</p>

            </div>
          </div>

          <div
            className="max-w-screen-md w-full mx-auto text-white px-4"
          >
            <p className="py-4">
  Queremos agradecer a quienes han estado ahí desde el principio. A los que ayudaron a levantar este proyecto con sus manos, sus ideas y su apoyo constante. A los vecinos, amigos y clientes que han creído en nosotros desde el primer día.
</p>
<p className="text-center">
  Gracias por formar parte de Edén. Este lugar también es vuestro.
</p>

          </div>
        </motion.div>

      </div>
      <StaticImage src="../../images/about/btm-border.png" alt="" className="w-full" />
    </div>
  </section>
)

export default About;