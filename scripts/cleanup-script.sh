#!/bin/bash
# Olympus Masonry Website - Project Cleanup Script
# This script reorganizes the project from proposal phase to development phase

set -e  # Exit on error

echo "🧹 Starting project cleanup and reorganization..."
echo ""

# Navigate to project root
cd "/Users/maho/Documents/code/clients/olympus-masonry-website"

echo "📁 Phase 1: Creating new directory structure..."
mkdir -p docs/archive/{01-research,02-proposal,03-design-samples}
mkdir -p docs/development
mkdir -p design/{sample-5-chosen,design-system,wireframes}
mkdir -p assets/images/{00-incoming,01-originals,02-curated,03-edited,04-web-ready}
mkdir -p assets/images/02-curated/{hero-candidates,projects/{brick-work,stone-work,patios,chimneys},team,process,misc}
mkdir -p assets/images/04-web-ready/{hero,projects/{full,thumbnails},team}
mkdir -p assets/{videos,documents}
mkdir -p src
mkdir -p scripts
echo "✅ Directory structure created"
echo ""

echo "📦 Phase 2: Moving documentation files to archive..."
# Brand guide (active reference)
mv olympus-masonry-brand-guide.md docs/brand-guide.md 2>/dev/null || true

# Research docs → archive
mv design-preferences-analysis.md docs/archive/01-research/ 2>/dev/null || true
mv high-end-masonry-websites-analysis.md docs/archive/01-research/ 2>/dev/null || true
mv thomann-hanry-technical-implementation.md docs/archive/01-research/ 2>/dev/null || true

# Proposal docs → archive
mv peter-proposal-email.md docs/archive/02-proposal/proposal-email.md 2>/dev/null || true
mv peter-pricing-breakdown.md docs/archive/02-proposal/pricing-breakdown.md 2>/dev/null || true
mv 20251029_160848.jpg docs/archive/02-proposal/business-card.jpg 2>/dev/null || true

# Sample phase docs → archive
mv DEV-PLAN-10-samples.md docs/archive/03-design-samples/ 2>/dev/null || true
mv HANDOFF-TO-DEV.md docs/archive/03-design-samples/ 2>/dev/null || true
mv SAMPLES-OVERVIEW.md docs/archive/03-design-samples/ 2>/dev/null || true
echo "✅ Documentation files moved"
echo ""

echo "🎨 Phase 3: Organizing design files..."
# Move entire samples folder to archive
mv samples docs/archive/03-design-samples/ 2>/dev/null || true

# Copy Sample 5 to design/ for reference
cp -R docs/archive/03-design-samples/samples/sample-5 design/sample-5-chosen/ 2>/dev/null || true
echo "✅ Design files organized"
echo ""

echo "🖼️  Phase 4: Moving client images..."
# Move client photos to originals (permanent archive)
if [ -d "image-resources" ]; then
    mv image-resources/* assets/images/01-originals/ 2>/dev/null || true
    rmdir image-resources 2>/dev/null || true
fi
echo "✅ Client images moved to assets/images/01-originals/"
echo ""

echo "📝 Phase 5: Creating placeholder files..."
touch src/.gitkeep
touch assets/videos/.gitkeep
touch assets/documents/.gitkeep
touch assets/images/00-incoming/.gitkeep
touch assets/images/02-curated/hero-candidates/.gitkeep
touch assets/images/03-edited/.gitkeep
touch assets/images/04-web-ready/hero/.gitkeep
echo "✅ Placeholder files created"
echo ""

echo "✅ Cleanup complete!"
echo ""
echo "Next steps:"
echo "1. Run 'git status' to see all changes"
echo "2. Run 'git add -A' to stage changes"
echo "3. Run cleanup script will handle the commit"
echo ""

# Git commit
echo "📦 Committing cleanup changes to git..."
git add -A
git commit -m "Major cleanup: Reorganize project for development phase

- Move proposal/research docs to docs/archive/
- Organize all 10 samples in archive, copy sample-5 to design/
- Create image management pipeline structure
- Move client photos to assets/images/01-originals/
- Create documentation structure
- Ready to begin development phase"
echo "✅ Changes committed to git"
echo ""

echo "🎉 Project reorganization complete!"
echo ""
echo "New structure created:"
echo "├── docs/"
echo "│   ├── brand-guide.md"
echo "│   ├── development/"
echo "│   └── archive/"
echo "├── design/"
echo "│   └── sample-5-chosen/"
echo "├── assets/"
echo "│   └── images/ (with pipeline structure)"
echo "├── src/ (ready for Next.js)"
echo "└── scripts/"
echo ""
echo "To continue, close this terminal and reopen Claude Code in:"
echo "/Users/maho/Documents/code/clients/olympus-masonry-website"
