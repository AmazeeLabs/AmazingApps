<?php

// Install test site content.

// ======================================================================
// Files
// ======================================================================
function importFile($path) {
  $filePath = dirname(__FILE__) . '/' . $path;
  $fileName = basename($filePath);
  return file_save_data(file_get_contents($filePath), 'public://' . $fileName);
}

$imageCharlotte = importFile('images/charlotte.jpg');
$imageHarry = importFile('images/harry.jpg');
$imageLewis = importFile('images/lewis.jpg');
$imageHappy = importFile('images/happy.jpg');
$imageLove = importFile('images/love.jpg');

// ======================================================================
// Taxonomy terms
// ======================================================================
use Drupal\menu_link_content\Entity\MenuLinkContent;
use Drupal\node\Entity\Node;
use Drupal\taxonomy\Entity\Term;

function createTerm($name) {
  $term = Term::create([
    'name' => $name,
    'vid' => 'tags',
  ]);
  $term->save();
  return $term;
}

$termCheers = createTerm('Cheers');
$termHugs = createTerm('Hugs');
$termJokes = createTerm('Jokes');
$termLaughs = createTerm('Laughs');
$termLove = createTerm('Love');
$termRainbows = createTerm('Rainbows');


// ======================================================================
// Articles
// ======================================================================
function createArticle($title, $content, $tags, $image, $alt) {
  $article = Node::create([
    'title' => $title,
    'type' => 'article',
    'body' => [
      'value' =>  file_get_contents(dirname(__FILE__) . '/' . $content),
      'format' => 'full_html',
    ],
    'field_tags' => $tags,
    'field_image' => [
      'target_id' => $image->id(),
      'alt' => $alt,
    ],
  ]);
  $article->save();
  return $article;
}

$article1 = createArticle(
  'We are all friends',
  'content/article1.html',
  [$termLove, $termHugs, $termJokes],
  $imageHappy,
  'Friendship is awesome!'
);

$article2 = createArticle(
  'Love makes us happy',
  'content/article2.html',
  [$termLove, $termHugs, $termRainbows],
  $imageLove,
  'We are such a happy bunch.'
);

$article3 = createArticle(
  'What a time to be alive',
  'content/article3.html',
  [$termCheers, $termHugs, $termJokes],
  $imageHarry,
  'Harry loves work so much, he smiles all day.'
);


// ======================================================================
// Team Members
// ======================================================================
function createTeamMember($title, $content, $tags, $image, $alt) {
  $teamMember = Node::create([
    'title' => $title,
    'type' => 'team_member',
    'body' => [
      'value' =>  file_get_contents(dirname(__FILE__) . '/' . $content),
      'format' => 'full_html',
    ],
    'field_tags' => $tags,
    'field_image' => [
      'target_id' => $image->id(),
      'alt' => $alt,
    ],
  ]);
  $teamMember->save();
  return $teamMember;
}

$lewis = createTeamMember(
  'Laughing Lewis',
  'content/lewis.html',
  [$termLaughs, $termHugs],
  $imageLewis,
  'Lewis just loves to laugh out loud.'
);

$harry = createTeamMember(
  'Hilarious Harry',
  'content/harry.html',
  [$termJokes, $termLaughs],
  $imageHarry,
  'Isn\'t he just hilarious?'
);

$charlotte = createTeamMember(
  'Cheery Charlotte',
  'content/charlotte.html',
  [$termHugs, $termCheers],
  $imageCharlotte,
  'Cheer them up Charlie!'
);

// ======================================================================
// Job Offerings
// ======================================================================
function createJobOffer($title, $content, $tags) {
  $job = Node::create([
    'title' => $title,
    'type' => 'job_offer',
    'body' => [
      'value' =>  file_get_contents(dirname(__FILE__) . '/' . $content),
      'format' => 'full_html',
    ],
    'field_tags' => $tags,
  ]);
  $job->save();
  return $job;
}

$ceo = createJobOffer(
  'Chief Entertainment Officer',
  'content/ceo.html',
  [$termJokes, $termLaughs, $termRainbows]
);

$hohd = createJobOffer(
  'Head of Hug Distribution',
  'content/hohd.html',
  [$termHugs, $termLaughs, $termRainbows]
);

// ======================================================================
// Simple pages
// ======================================================================
function createPage($title, $content) {
  $page = Node::create([
    'title' => $title,
    'type' => 'page',
    'body' => [
      'value' =>  file_get_contents(dirname(__FILE__) . '/' . $content),
      'format' => 'full_html',
    ],
  ]);
  $page->save();
  return $page;
}

$imprint = createPage(
  'Imprint & Legal mumbo jumbo',
  'content/imprint.html'
);

// ======================================================================
// Menu items
// ======================================================================
function createMainMenuItem($title, $path) {
  $item = MenuLinkContent::create([
    'title' => $title,
    'link' => ['uri' => 'internal:' . $path],
    'menu_name' => 'main',
  ]);
  $item->save();
  return $item;
}

createMainMenuItem('Home', '/');
createMainMenuItem('Blog', '/blog');
createMainMenuItem('Team', '/team');
createMainMenuItem('Jobs', '/Jobs');

function createFooterMenuItem($title, $path) {
  $item = MenuLinkContent::create([
    'title' => $title,
    'link' => ['uri' => 'internal:' . $path],
    'menu_name' => 'footer',
  ]);
  $item->save();
  return $item;
}

createFooterMenuItem('Imprint', '/node/' . $imprint->id());
createFooterMenuItem('Jobs', '/jobs');
