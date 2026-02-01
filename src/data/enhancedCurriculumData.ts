// Enhanced curriculum data with expanded vocabulary themes
// This file enriches the base curriculum with 20+ vocabulary themes per level

import { curriculumData as baseCurriculumData, LevelCurriculum, SkillCategory, CEFRLevel } from "./curriculumData";
import { 
  a1VocabularySkills,
  a2VocabularySkills,
  b1VocabularySkills,
  b2VocabularySkills,
  c1VocabularySkills,
  c2VocabularySkills,
  getVocabularySkillsByLevel
} from "./curriculumVocabularySkills";

// Get vocabulary category with expanded themes for a specific level
const getEnhancedVocabularyCategory = (level: CEFRLevel): SkillCategory => {
  const skills = getVocabularySkillsByLevel(level);
  
  const descriptions: Record<CEFRLevel, string> = {
    A1: "20+ essential vocabulary themes for beginners",
    A2: "20+ everyday vocabulary themes for elementary learners",
    B1: "20+ intermediate vocabulary themes for independent users",
    B2: "20+ upper-intermediate vocabulary themes",
    C1: "20+ advanced vocabulary themes for proficient users",
    C2: "20+ mastery-level vocabulary themes"
  };

  return {
    id: `${level.toLowerCase()}-vocabulary`,
    title: "Vocabulary",
    icon: "📚",
    description: descriptions[level],
    skills: skills
  };
};

// Enhance curriculum data with expanded vocabulary
export const getEnhancedCurriculumData = (): LevelCurriculum[] => {
  return baseCurriculumData.map(levelData => {
    // Replace the vocabulary category with enhanced version
    const enhancedCategories = levelData.categories.map(category => {
      if (category.id.includes('vocabulary')) {
        return getEnhancedVocabularyCategory(levelData.level);
      }
      return category;
    });

    return {
      ...levelData,
      categories: enhancedCategories
    };
  });
};

// Export enhanced curriculum as default
export const enhancedCurriculumData = getEnhancedCurriculumData();

// Helper to get vocabulary theme count by level
export const getVocabularyThemeCount = (level: CEFRLevel): number => {
  return getVocabularySkillsByLevel(level).length;
};

// Get total vocabulary exercises available
export const getTotalVocabularyExercises = (level: CEFRLevel): number => {
  const skills = getVocabularySkillsByLevel(level);
  // Each theme generates approximately 15-18 exercises (3 types × 5-6 words)
  return skills.length * 15;
};
