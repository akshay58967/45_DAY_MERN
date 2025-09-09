const skills = [
  { name: 'HTML', proficiency: 'Intermediate' },
  { name: 'CSS', proficiency: 'Beginner' },
  { name: 'JavaScript', proficiency: 'Advanced' },
  { name: 'Python', proficiency: 'Intermediate' }
];
function formatSkills(skillArray) {
  return skillArray.map(skill => `${skill.name} (${skill.proficiency})`);
}
const formattedSkills = formatSkills(skills);
console.log(formattedSkills);
