export interface User {
  document_type_id: number,
  Numero_de_documento: number,
  Nombre1: string,
  Nombre2?: string,
  Apellido1: string,
  Apellido2?: string,
  rol_id: number,
  Fecha_nacimiento: Date,
  Direccion: string,
  user_name: string,
  password: string
}
