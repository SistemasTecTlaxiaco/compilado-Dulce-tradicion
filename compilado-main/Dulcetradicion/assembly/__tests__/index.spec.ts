import { context, logging, storage, ContractPromiseBatch, u128 } from 'near-sdk-as';
import { Registrar_Productos,Buscar_Productos} from "..";
import { Productos, allProductos, Usuarios, allUsuarios/*, Proveedors, allProveedors, Clients, allClients*/, ONE_NEAR } from '../models'


const id_Productos = '1';
const Nombre = 'Torrejas';
const Cantidad = 'Mayoreo.';
const Precio = '15';
const Fecha = '11/07/2023';
const Hora = '20:00';
const Pedidos = '50';




let newProductos = new Productos(id_Productos, Nombre, Cantidad, Precio, Fecha, Hora, Pedidos);

const allProductosIndex = allProductos.length;
const allUsuariosIndex = allUsuarios.length;

const contsData = new Array<Usuarios>(allUsuariosIndex);
for(let x = 0; x < allUsuariosIndex; x++) {
    contsData[x] = allUsuarios[x]
}

const data = new Array<Productos>(allProductosIndex);
for(let i=0; i < allProductosIndex; i++) {
    data[i] = allProductos[i]
}

describe("Registrar_Productos", () => {
    it('should return "Nuevo Productos registrado"', () => {
        expect(Registrar_Productos('1','Torrejas', 'Mayoreo.','15', '11/07/2023', '20:00', '50')).toStrictEqual(newProductos);
    })
})
/*
describe("Buscar_Productos", () => {
    it('should return all Productos', () => {
        expect(Buscar_Productos('Torrejas')).toStrictEqual(data)

    })
})

describe("getContributors", () => {
    it('should return all contributors', () => {
        expect(getContributors()).toStrictEqual(contsData)
    })
})

describe("findContributor", () => {

    it('should be true', () => {
        expect(findContributor(contributorUser)).toBeFalsy()
    })
})

describe("deleteContributors", () => {
    it("should delete all the contributors", () => {
        deleteContributors()
        expect(getContributorsLength()).toBe(0, "Contributors list should be empty.")
    })
})

describe("deleteBooks", () => {
    it('should delete books', () => {
        deleteBooks()
        expect(booksLen()).toBe(0, 'books should be deleted!')
    })
})
*/
