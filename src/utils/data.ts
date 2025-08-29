/**
 * Retorna a idade de um bezerro entre duas datas conforme regras:
 * - se < 1 mês   : retorna "X dias"
 * - se < 1.5 ano : retorna "Y meses"
 * - se >= 1.5 ano: retorna "A anos B meses"
 *
 * Aceita Date ou string (formato aceito pelo construtor Date).
 */
export function getCalfAge(
  birthDate: Date | string,
  refDate: Date | string = new Date()
): string {
  const birth =
    birthDate instanceof Date
      ? new Date(birthDate.getTime())
      : new Date(birthDate);
  const ref =
    refDate instanceof Date ? new Date(refDate.getTime()) : new Date(refDate);

  if (isNaN(birth.getTime()) || isNaN(ref.getTime())) return "Data inválida";
  if (birth.getTime() > ref.getTime()) return "Data inválida";

  const msPerDay = 24 * 60 * 60 * 1000;
  const utcBirth = Date.UTC(
    birth.getFullYear(),
    birth.getMonth(),
    birth.getDate()
  );
  const utcRef = Date.UTC(ref.getFullYear(), ref.getMonth(), ref.getDate());
  const totalDays = Math.floor((utcRef - utcBirth) / msPerDay);

  let yearDiff = ref.getFullYear() - birth.getFullYear();
  let monthDiff = ref.getMonth() - birth.getMonth();
  let dayDiff = ref.getDate() - birth.getDate();

  let totalMonths = yearDiff * 12 + monthDiff;
  if (dayDiff < 0) totalMonths -= 1;

  if (totalMonths < 1) {
    const dias = totalDays;
    return `${dias} ${dias === 1 ? "dia" : "dias"}`;
  }

  if (totalMonths < 18) {
    const meses = totalMonths;
    return `${meses} ${meses === 1 ? "mês" : "meses"}`;
  }

  const anos = Math.floor(totalMonths / 12);
  let mesesRestantes = totalMonths % 12;
  if (mesesRestantes < 0) mesesRestantes = 0;

  const anoLabel = anos === 1 ? "ano" : "anos";
  const mesLabel = mesesRestantes === 1 ? "mês" : "meses";

  if (mesesRestantes === 0) return `${anos} ${anoLabel}`;
  return `${anos} ${anoLabel} ${mesesRestantes} ${mesLabel}`;
}
