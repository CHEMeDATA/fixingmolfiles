import { writeFileSync } from "fs";
import { readFileSync } from "fs";
import { existsSync } from "fs";
import { join } from "path";


let results = [];

//let image_input;
//let svg_data;
let fileNameInputImage;
let fileNameSvg;
let contentSdf;
let page;
let fileNameSdfFile;
let pageFile;
for (let index = 0; index < 1000; index++) {
  fileNameInputImage = "input/images/struct" + index + ".png";// only this numbering starts at 0 - the others at 1
  if (existsSync(fileNameInputImage)) {
   // image_input = readFileSync(im);
    fileNameSvg = "input/separated_svg/str" + (index + 1) + ".svg";
    //svg_data = readFileSync(imageOfStructuresvg).toString();
    fileNameSdfFile = "input/separated_sdf/str" + (index + 1) + ".sdf";
    contentSdf = readFileSync(fileNameSdfFile).toString();
    pageFile = "input/page-number/in" + (index + 1) + ".txt";
    page = readFileSync(pageFile).toString();
    results.push({
      fileNameInputImage: fileNameInputImage,
      fileNameSvg: fileNameSvg,
      sdf: contentSdf,
      pageNumber: page
    });
    // let tr = document.createElement("TR");

    //   let tdImage = document.createElement("TD");
    //  tdImage.innerHTML = "<img src='" + im + "' alt='image" + index + "' width='150'>";
    //  tr.appendChild(tdImage);

    // let tdImageOfStructure = document.createElement("TD");
    //  tdImageOfStructure.setAttribute("id", "edit" + index);
    // tdImageOfStructure.innerHTML = '<object type="image/svg+xml"  data="' + imageOfStructuresvg + '" width="300" "></object>';
    //  tr.appendChild(tdImageOfStructure);

    // var place = document.getElementById("target").appendChild(tr);

    continue;
  }
}
writeFileSync(
  join("data", "results.json"),
  // join(__dirname, "input", "results.json"),  // THIS IS NOT WORKING...
  JSON.stringify(results, null, 2),
  "utf8"
);
