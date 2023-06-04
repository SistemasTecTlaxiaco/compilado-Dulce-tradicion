
import { context, PersistentVector, u128 } from "near-sdk-as";

@nearBindgen
export class Productos {
  id_Productos: string;
  Nombre: string;
  Cantidad: string;
  Precio: string;
  Fecha: string;
  Hora: string;
  //Proveedor: string;
  Pedidos: string;

  constructor(id_Productos: string, Nombre: string, Cantidad: string, Precio: string, Fecha: string, Hora: string, /*Proveedor: string,*/ Pedidos: string) {
    this.id_Productos= id_Productos;
    this.Nombre = Nombre;
    this.Cantidad = Cantidad;
    this.Precio = Precio;
    this.Fecha = Fecha;
    this.Hora = Hora;
    //this.Proveedor = Proveedor;
    this.Pedidos = Pedidos;
  }
}

@nearBindgen
export class Usuarios {
  Nombre: string;
  ApellidoPat: string;
  ApellidoMat: string;
  Telefono: string;
  Direccion: string;
  Correo: string;
  Canales: string;
  Proveedor: boolean;
  Cliente: boolean;
  Sexo: string;
  FechaNac: string;
  Wallet: string;

  constructor(Nombre: string, ApellidoPat: string, ApellidoMat: string, Telefono: string, Direccion: string, Correo: string, Canales: string, Proveedor: boolean, Cliente: boolean, Sexo: string, FechaNac: string, Wallet: string) {
    this.Nombre = Nombre;
    this.ApellidoPat = ApellidoPat;
    this.ApellidoMat = ApellidoMat;
    this.Telefono = Telefono;
    this.Direccion = Direccion;
    this.Correo = Correo;
    this.Canales = Canales;
    this.Proveedor = Proveedor;
    this.Cliente = Cliente;
    this.Sexo = Sexo;
    this.FechaNac = FechaNac;
    this.Wallet = context.sender;
  }
}


//export const allProducto = new PersistentVector<Producto>("v")
//export const allUsuarios = new PersistentVector<Usuarios>("c")
export const allProductos = new PersistentVector<Productos>('Productos');
export const allUsuarios = new PersistentVector<Usuarios>('usuarios');
//export const allProveedors = new PersistentVector<Proveedors>("proveedores")
//export const allClients = new PersistentVector<Clients>("clientes")
export const ONE_NEAR = u128.from('10000000000000000')



/*
@nearBindgen
export class Proveedors {
    Nombre: string;
    constructor() {
        this.Nombre = context.sender;
    }
}

@nearBindgen
export class Clients {
    Nombre: string;
    constructor() {
        this.Nombre = context.sender;
    }
}*/
