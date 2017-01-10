<template>
	 <div id="contenido_tarifas">
        <h3 class="titulos_destacados">{{ copy_superior.titulo }}</h3>
        <div class="mensajes">
            <p>{{copy_superior.cuerpo}}</p>
        </div>
        
        <table class="table is-stripped">
            <thead>
                <tr>
                    <th>Origen</th>
                    <th>Destino</th>
                    <th>Precio (US)</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tarifa in tarifas">
                    <td>{{tarifa.origen}}</td>
                    <td>{{tarifa.destino}}</td>
                    <td>$ {{ tarifa.precio }}*</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import data from '../info'

export default {
	name: 'content-component',
 	data(){
        return {
            tarifas: data.tarifas,
            copy_superior: data.copy_superior
        };
    }
}
</script>
