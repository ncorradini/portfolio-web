export default function convertAsteriskToStrongTag(str: string) {
  return str.replace(
    /\*{1,2}(.*?)\*{1,2}/g,
    `<strong class="font-normal text-[#dd8383]">$1</strong>`
  );
}
