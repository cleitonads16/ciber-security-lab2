import { execSync } from "child_process";
import { readFileSync } from "fs";

export function lerLog(arquivo: string): string {
  execSync(`cat logs-upv/${arquivo}`);
  return readFileSync(`logs-upv/${arquivo}`, "utf8");
}