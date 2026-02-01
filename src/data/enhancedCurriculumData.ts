// Enhanced curriculum data - direct export from base curriculum
// The base curriculumData now contains all the exercise-aligned content

import { curriculumData, LevelCurriculum, CEFRLevel } from "./curriculumData";

// Export enhanced curriculum as the base curriculum (no modifications needed)
export const enhancedCurriculumData = curriculumData;

// Re-export types for convenience
export type { LevelCurriculum, CEFRLevel };

// Helper to get vocabulary theme count by level (from curriculum)
export const getVocabularyThemeCount = (level: CEFRLevel): number => {
  const levelData = curriculumData.find(l => l.level === level);
  if (!levelData) return 0;
  
  const vocabCategory = levelData.categories.find(c => c.id.includes('vocabulary'));
  return vocabCategory ? vocabCategory.skills.length : 0;
};

// Get grammar skill count by level
export const getGrammarSkillCount = (level: CEFRLevel): number => {
  const levelData = curriculumData.find(l => l.level === level);
  if (!levelData) return 0;
  
  const grammarCategory = levelData.categories.find(c => c.id.includes('grammar'));
  return grammarCategory ? grammarCategory.skills.length : 0;
};

// Get total exercises by level
export const getLevelExercises = (level: CEFRLevel): number => {
  const levelData = curriculumData.find(l => l.level === level);
  if (!levelData) return 0;
  
  let count = 0;
  levelData.categories.forEach(category => {
    category.skills.forEach(skill => {
      count += skill.exerciseCount || 0;
    });
  });
  
  return count;
};
