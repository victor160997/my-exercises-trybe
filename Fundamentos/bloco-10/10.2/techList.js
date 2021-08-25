/* {
  tech: 'nomeTecnologia',
  name: name,
} */
 const techList = (arrayTech, name) => {
   if (arrayTech.length === 0) {
     return 'Vazio!';
   };
   const arrayTechName = [];
   arrayTech.sort().forEach((tech) => arrayTechName.push({
     'tech': tech,
     'name': name,
   }))
   return arrayTechName;
 };

 module.exports = techList;
 