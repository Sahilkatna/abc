<?php

namespace Drupal\talawa\Plugin\Alter;

use Drupal\socialbase\Plugin\Alter\ThemeSuggestions;
/**
 * Implements hook_theme_suggestions_alter().
 *
 * @ingroup plugins_alter
 *
 * @BootstrapAlter("theme_suggestions")
 */
class TalawaThemeSuggestions extends ThemeSuggestions {

  /**
   * {@inheritdoc}
   */
  public function alter(&$suggestions, &$context1 = NULL, &$hook = NULL) {
    parent::alter($suggestions, $context1, $hook);

    $variables = $this->variables;

    switch ($hook) {

      case 'block':

        $block_id = $variables['elements']['#derivative_plugin_id'];
        $blocks_id = [
          'articles_profile-block_articles_on_profile',
          'job_opportunities_profile-block_job_opportunities_on_profile',
        ];

        if (in_array($block_id, $blocks_id)) {
          $suggestions = [$variables['theme_hook_original'] . '__' . 'views_block__sidebar'];
        }

        if (isset($variables['elements']['kpi_analytics'])) {
          $suggestions = [$variables['theme_hook_original'] . '__' . 'charts'];
        }

        break;

    }

  }

}
