import { DataSource } from "typeorm";

export async function buscarOrdens(
  ds: DataSource,
  upv: string,
): Promise<unknown> {
  return ds.query(`SELECT * FROM ordem_manutencao WHERE upvId = '${upv}'`);
}