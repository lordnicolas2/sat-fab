Nicolás Mateos
DNI 28669338
nicolas_mateos@yahoo.com
Sede Tandil

SATÉLITE FÁBRICA

Es una página que controla la fabricación de naves espaciales en un satélite que oficia como fábrica.
Se le pueden encargar cantidades finitas de naves ya preestablecidas. No se maneja por un stock, sino por la capacidad del satélite para producir cada tipo de nave. Ejemplo: naves pequeñas se permiten hasta 1000; nave grande sólo 1.
En cada tipo de nave que se puede solicitar se observa una imagen, su nombre, una descripción (en otro componente aparte), su costo y la botonera para su pedido. A medida que se va solicitando cada nave se va agregando a la lista de pedidos sumándose su costo. Hay un botón bajo esa lista que oficia como si fuese el botón de terminar y hacer el pedido. En este caso sólo limpia la pantalla y vuelve todo a cero.

Nota:
A medida que iba creando los componenentes con ng g c [nombre_del_componente] me los creaba sin la palabra "component" en su nombre. Lo trabajé así, y avanzado el proyecto me resultó engorroso corregirlo. Los compoinentes son:
- satfab-ships (página principal)
- ship-list (en donde está el nombre, imagen, costo, botonera, y link a su descripción)
- cart (en donde está la lista de pedidos)
- decriptions (la descripción de cada nave que se accede desde el botón "click" en ship-list)

- ship-cart.ts (es el serivio que usé para la comunicación entre los componentes - tampoco me agregó la parabra "service" cuando lo creé)

- Ship.ts (es la interfaz que creé para tipar los datos)
