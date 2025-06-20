import { usContext } from "../../src/base-pruebas/06-deses-obj";


describe('Pruebas en 06-deses-obj', () => {
  
    test('useContext debe retornar un objeto', () => {
        const test = {
            nombreClave: 'Jan',
            anios: 26,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };
        const user = usContext({
            clave: 'Jan',
            edad: 26,
        });
        expect(test).toEqual(user);

    })
    

})
