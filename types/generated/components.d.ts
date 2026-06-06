import type { Schema, Struct } from '@strapi/strapi';

export interface CommonFeedContext extends Struct.ComponentSchema {
  collectionName: 'components_common_feed_contexts';
  info: {
    displayName: 'Feed Context';
  };
  attributes: {
    context_key: Schema.Attribute.Enumeration<
      [
        'bundle_identifier',
        'advertising_identifier',
        'uuid',
        'os_version',
        'device_model',
        'device_make',
        'device_name',
        'device_type',
        'user_agent',
        'device_width',
        'device_height',
        'time_zone_offset',
        'platform',
        'sdk_version',
        'version_name',
        'layout_id',
        'is_debug',
        'language_code',
        'language_locale',
        'store',
        'signed_device_info_token',
        'browser',
      ]
    > &
      Schema.Attribute.Required;
    context_type: Schema.Attribute.Enumeration<
      ['query_param', 'header', 'authentication']
    > &
      Schema.Attribute.Required;
    rename_key: Schema.Attribute.String;
  };
}

export interface MobileCardType1 extends Struct.ComponentSchema {
  collectionName: 'components_mobile_card_type_1s';
  info: {
    displayName: 'Card Type 1';
  };
  attributes: {
    aspect_ratio: Schema.Attribute.Enumeration<
      [
        'aspect_1:1',
        'aspect_2:1',
        'aspect_2:3',
        'aspect_3:2',
        'aspect_3:4',
        'aspect_4:3',
        'aspect_5:3',
        'aspect_9:13',
        'aspect_9:16',
        'aspect_16:1',
        'aspect_16:2',
        'aspect_16:4',
        'aspect_16:6',
        'aspect_16:7',
        'aspect_16:9',
        'aspect_21:9',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'aspect_16:9'>;
    image_1_custom_url: Schema.Attribute.String;
    image_1_height: Schema.Attribute.Integer;
    image_1_margin_bottom: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    image_1_margin_left: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    image_1_margin_right: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    image_1_margin_top: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    image_1_object_fit: Schema.Attribute.Enumeration<
      ['ScaleToFit', 'ScaleToFill']
    > &
      Schema.Attribute.DefaultTo<'ScaleToFill'>;
    image_1_source_key: Schema.Attribute.String;
    image_1_use_custom_url: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    image_1_width: Schema.Attribute.Integer;
    label_1_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label_1_font_family: Schema.Attribute.Enumeration<
      [
        'normal',
        'notoserif',
        'sans-serif',
        'sans-serif-light',
        'sans-serif-thin',
        'sans-serif-condensed',
        'sans-serif-medium',
        'serif',
        'Roboto',
        'monospace',
      ]
    > &
      Schema.Attribute.DefaultTo<'normal'>;
    label_1_height: Schema.Attribute.Integer;
    label_1_lines: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    label_1_margin_bottom: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_1_margin_left: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_1_margin_right: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_1_margin_top: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_1_source_key: Schema.Attribute.String;
    label_1_width: Schema.Attribute.Integer;
    label_2_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label_2_custom_text: Schema.Attribute.String;
    label_2_font_family: Schema.Attribute.Enumeration<
      [
        'normal',
        'notoserif',
        'sans-serif',
        'sans-serif-light',
        'sans-serif-thin',
        'sans-serif-condensed',
        'sans-serif-medium',
        'serif',
        'Roboto',
        'monospace',
      ]
    > &
      Schema.Attribute.DefaultTo<'normal'>;
    label_2_height: Schema.Attribute.Integer;
    label_2_lines: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    label_2_margin_bottom: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_2_margin_left: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_2_margin_right: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_2_margin_top: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_2_source_key: Schema.Attribute.String;
    label_2_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    label_2_width: Schema.Attribute.Integer;
    show_image_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    show_label_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    show_label_2: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface MobileCardType2 extends Struct.ComponentSchema {
  collectionName: 'components_mobile_card_type_2s';
  info: {
    displayName: 'Card Type 2';
  };
  attributes: {
    aspect_ratio: Schema.Attribute.Enumeration<
      [
        'aspect_1:1',
        'aspect_2:1',
        'aspect_2:3',
        'aspect_3:2',
        'aspect_3:4',
        'aspect_4:3',
        'aspect_5:3',
        'aspect_9:13',
        'aspect_9:16',
        'aspect_16:1',
        'aspect_16:2',
        'aspect_16:4',
        'aspect_16:6',
        'aspect_16:7',
        'aspect_16:9',
        'aspect_21:9',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'aspect_16:9'>;
    badge_height: Schema.Attribute.Integer;
    badge_margin_bottom: Schema.Attribute.Integer;
    badge_margin_left: Schema.Attribute.Integer;
    badge_margin_right: Schema.Attribute.Integer;
    badge_margin_top: Schema.Attribute.Integer;
    badge_url: Schema.Attribute.String;
    badge_width: Schema.Attribute.Integer;
    image_1_height: Schema.Attribute.Integer;
    image_1_margin_bottom: Schema.Attribute.Integer;
    image_1_margin_left: Schema.Attribute.Integer;
    image_1_margin_right: Schema.Attribute.Integer;
    image_1_margin_top: Schema.Attribute.Integer;
    image_1_object_fit: Schema.Attribute.Enumeration<
      ['ScaleToFit', 'ScaleToFill']
    >;
    image_1_source_key: Schema.Attribute.String;
    image_1_width: Schema.Attribute.Integer;
    image_2_height: Schema.Attribute.Integer;
    image_2_margin_bottom: Schema.Attribute.Integer;
    image_2_margin_left: Schema.Attribute.Integer;
    image_2_margin_right: Schema.Attribute.Integer;
    image_2_margin_top: Schema.Attribute.Integer;
    image_2_object_fit: Schema.Attribute.Enumeration<
      ['ScaleToFit', 'ScaleToFill']
    >;
    image_2_source_key: Schema.Attribute.String;
    image_2_width: Schema.Attribute.Integer;
    label_1_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label_1_custom_text: Schema.Attribute.String;
    label_1_font_family: Schema.Attribute.Enumeration<
      [
        'normal',
        'notoserif',
        'sans-serif',
        'sans-serif-light',
        'sans-serif-thin',
        'sans-serif-condensed',
        'sans-serif-medium',
        'serif',
        'Roboto',
        'monospace',
      ]
    > &
      Schema.Attribute.DefaultTo<'normal'>;
    label_1_height: Schema.Attribute.Integer;
    label_1_lines: Schema.Attribute.Integer;
    label_1_margin_bottom: Schema.Attribute.Integer;
    label_1_margin_left: Schema.Attribute.Integer;
    label_1_margin_right: Schema.Attribute.Integer;
    label_1_margin_top: Schema.Attribute.Integer;
    label_1_source_key: Schema.Attribute.String;
    label_1_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    label_1_width: Schema.Attribute.Integer;
    label_2_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label_2_custom_text: Schema.Attribute.String;
    label_2_font_family: Schema.Attribute.Enumeration<
      [
        'normal',
        'notoserif',
        'sans-serif',
        'sans-serif-light',
        'sans-serif-thin',
        'sans-serif-condensed',
        'sans-serif-medium',
        'serif',
        'Roboto',
        'monospace',
      ]
    > &
      Schema.Attribute.DefaultTo<'normal'>;
    label_2_height: Schema.Attribute.Integer;
    label_2_lines: Schema.Attribute.Integer;
    label_2_margin_bottom: Schema.Attribute.Integer;
    label_2_margin_left: Schema.Attribute.Integer;
    label_2_margin_right: Schema.Attribute.Integer;
    label_2_margin_top: Schema.Attribute.Integer;
    label_2_source_key: Schema.Attribute.String;
    label_2_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    label_2_width: Schema.Attribute.Integer;
    label_3_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label_3_custom_text: Schema.Attribute.String;
    label_3_font_family: Schema.Attribute.Enumeration<
      [
        'normal',
        'notoserif',
        'sans-serif',
        'sans-serif-light',
        'sans-serif-thin',
        'sans-serif-condensed',
        'sans-serif-medium',
        'serif',
        'Roboto',
        'monospace',
      ]
    > &
      Schema.Attribute.DefaultTo<'normal'>;
    label_3_height: Schema.Attribute.Integer;
    label_3_lines: Schema.Attribute.Integer;
    label_3_margin_bottom: Schema.Attribute.Integer;
    label_3_margin_left: Schema.Attribute.Integer;
    label_3_margin_right: Schema.Attribute.Integer;
    label_3_margin_top: Schema.Attribute.Integer;
    label_3_source_key: Schema.Attribute.String;
    label_3_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    label_3_width: Schema.Attribute.Integer;
    preview_player_delay: Schema.Attribute.Integer;
    preview_player_enable_volume: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    preview_player_repeat_count: Schema.Attribute.Integer;
    preview_player_video_end_time_key: Schema.Attribute.String;
    preview_player_video_source_key: Schema.Attribute.String;
    preview_player_video_start_time_key: Schema.Attribute.String;
    progress_bar_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    progress_bar_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    progress_bar_height: Schema.Attribute.Integer;
    progress_bar_margin_bottom: Schema.Attribute.Integer;
    progress_bar_margin_left: Schema.Attribute.Integer;
    progress_bar_margin_right: Schema.Attribute.Integer;
    progress_bar_margin_top: Schema.Attribute.Integer;
    progress_bar_source_key: Schema.Attribute.String;
    progress_bar_width: Schema.Attribute.Integer;
    show_badge: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    show_image_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    show_image_2: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    show_label_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    show_label_2: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    show_label_3: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    show_preview_player: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    show_progress_bar: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface MobileCuration extends Struct.ComponentSchema {
  collectionName: 'components_mobile_curations';
  info: {
    displayName: 'Curation';
  };
  attributes: {
    feed: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MobileGrid extends Struct.ComponentSchema {
  collectionName: 'components_mobile_grids';
  info: {
    displayName: 'Grid';
  };
  attributes: {
    card_style: Schema.Attribute.Relation<
      'oneToOne',
      'api::mobile-card-style.mobile-card-style'
    >;
    column_count: Schema.Attribute.Integer & Schema.Attribute.Required;
    column_gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    enable_title: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    feed: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
    item_limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<20>;
    lazy_load_row_count: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    row_count: Schema.Attribute.Integer & Schema.Attribute.Required;
    row_gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    row_reload_offset: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    title_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title_custom_text: Schema.Attribute.String;
    title_font_family: Schema.Attribute.Enumeration<
      [
        'normal',
        'notoserif',
        'sans-serif',
        'sans-serif-light',
        'sans-serif-thin',
        'sans-serif-condensed',
        'sans-serif-medium',
        'serif',
        'Roboto',
        'monospace',
      ]
    > &
      Schema.Attribute.DefaultTo<'normal'>;
    title_height: Schema.Attribute.Integer;
    title_source_key: Schema.Attribute.String;
    title_translation_bottom: Schema.Attribute.Integer;
    title_translation_left: Schema.Attribute.Integer;
    title_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    translation_bottom: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_right: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface MobileHorizontalList extends Struct.ComponentSchema {
  collectionName: 'components_mobile_horizontal_lists';
  info: {
    displayName: 'Horizontal List';
  };
  attributes: {
    auto_scroll_interval: Schema.Attribute.Integer;
    card_style: Schema.Attribute.Relation<
      'oneToOne',
      'api::mobile-card-style.mobile-card-style'
    >;
    cell_gap: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    cells_per_view: Schema.Attribute.Integer & Schema.Attribute.Required;
    enable_auto_scroll: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    enable_pagination_dots: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    enable_title: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    feed: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    pagination_dots_dot_size: Schema.Attribute.Integer;
    pagination_dots_gap: Schema.Attribute.Integer;
    pagination_dots_margin_bottom: Schema.Attribute.Integer;
    pagination_dots_margin_left: Schema.Attribute.Integer;
    pagination_dots_margin_right: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    pagination_dots_margin_top: Schema.Attribute.Integer;
    pagination_dots_selected_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    pagination_dots_unselected_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    peek_offset: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title_custom_text: Schema.Attribute.String;
    title_font_family: Schema.Attribute.Enumeration<
      [
        'normal',
        'notoserif',
        'sans-serif',
        'sans-serif-light',
        'sans-serif-thin',
        'sans-serif-condensed',
        'sans-serif-medium',
        'serif',
        'Roboto',
        'monospace',
      ]
    > &
      Schema.Attribute.DefaultTo<'normal'>;
    title_margin_bottom: Schema.Attribute.Integer;
    title_margin_left: Schema.Attribute.Integer;
    title_margin_right: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    title_margin_top: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title_source_key: Schema.Attribute.String;
    title_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface RokuActionIcon extends Struct.ComponentSchema {
  collectionName: 'components_roku_action_icons';
  info: {
    displayName: 'Action Icon';
  };
  attributes: {
    action: Schema.Attribute.Enumeration<['play', 'myList', 'share']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'play'>;
    height: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<40>;
    hover_icon_url: Schema.Attribute.String;
    icon_url: Schema.Attribute.String & Schema.Attribute.Required;
    translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<40>;
  };
}

export interface RokuActionIconsGroup extends Struct.ComponentSchema {
  collectionName: 'components_roku_action_icons_groups';
  info: {
    displayName: 'Action Icons Group';
  };
  attributes: {
    action_icons: Schema.Attribute.Component<'roku.action-icon', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<10>;
    translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface RokuBackgroundImage extends Struct.ComponentSchema {
  collectionName: 'components_roku_background_images';
  info: {
    displayName: 'Secondary Image';
  };
  attributes: {
    aspect_ratio: Schema.Attribute.Enumeration<
      [
        'aspectRatio_16:9',
        'aspectRatio_16:6',
        'aspectRatio_16:2',
        'aspectRatio_1:1',
        'aspectRatio_2:3',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'aspectRatio_1:1'>;
    height: Schema.Attribute.Integer & Schema.Attribute.Required;
    source_key: Schema.Attribute.String & Schema.Attribute.Required;
    translation_left: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    translation_top: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    width: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface RokuBadge extends Struct.ComponentSchema {
  collectionName: 'components_roku_badges';
  info: {
    displayName: 'Badge';
  };
  attributes: {
    badge_url: Schema.Attribute.String & Schema.Attribute.Required;
    focused_badge_url: Schema.Attribute.String;
    height: Schema.Attribute.Integer & Schema.Attribute.Required;
    source_key: Schema.Attribute.String & Schema.Attribute.Required;
    source_value: Schema.Attribute.String & Schema.Attribute.Required;
    translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    width: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface RokuBorder extends Struct.ComponentSchema {
  collectionName: 'components_roku_borders';
  info: {
    displayName: 'Border';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface RokuButton extends Struct.ComponentSchema {
  collectionName: 'components_roku_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    action: Schema.Attribute.Enumeration<['play', 'trailer', 'favorite']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'play'>;
    enable_icon: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    height: Schema.Attribute.Integer & Schema.Attribute.Required;
    icon: Schema.Attribute.Component<'roku.button-icon', false>;
    label: Schema.Attribute.Component<'roku.text', false>;
    translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    width: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface RokuButtonGroup extends Struct.ComponentSchema {
  collectionName: 'components_roku_button_groups';
  info: {
    displayName: 'Button Group';
  };
  attributes: {
    gap: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    position: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface RokuButtonIcon extends Struct.ComponentSchema {
  collectionName: 'components_roku_button_icons';
  info: {
    displayName: 'Button Icon';
  };
  attributes: {
    focus_icon_url: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer & Schema.Attribute.Required;
    icon_url: Schema.Attribute.String & Schema.Attribute.Required;
    position: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    width: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface RokuButtonType1 extends Struct.ComponentSchema {
  collectionName: 'components_roku_button_type_1s';
  info: {
    displayName: 'Button Type 1';
  };
  attributes: {
    background_rectangle_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'> &
      Schema.Attribute.DefaultTo<'#FFFFFF'>;
    background_rectangle_focused_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'> &
      Schema.Attribute.DefaultTo<'#FFFFFF'>;
    background_rectangle_footprint_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'> &
      Schema.Attribute.DefaultTo<'#FFFFFF'>;
    background_rectangle_height: Schema.Attribute.Integer &
      Schema.Attribute.Required;
    background_rectangle_opacity: Schema.Attribute.Decimal &
      Schema.Attribute.Required;
    background_rectangle_width: Schema.Attribute.Integer &
      Schema.Attribute.Required;
    bar_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'> &
      Schema.Attribute.DefaultTo<'#FFFFFF'>;
    bar_height: Schema.Attribute.Integer & Schema.Attribute.Required;
    button_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required;
    button_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required;
    focused_icon_source_key: Schema.Attribute.String;
    footprint_icon_source_key: Schema.Attribute.String;
    icon_height: Schema.Attribute.Integer;
    icon_translation_left: Schema.Attribute.Integer;
    icon_translation_top: Schema.Attribute.Integer;
    icon_width: Schema.Attribute.Integer;
    item_gap: Schema.Attribute.Integer & Schema.Attribute.Required;
    label_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label_focused_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'> &
      Schema.Attribute.DefaultTo<'#FFFFFF'>;
    label_focused_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.DefaultTo<'MediumBoldSystemFont'>;
    label_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.DefaultTo<'MediumBoldSystemFont'>;
    label_footprint_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'> &
      Schema.Attribute.DefaultTo<'#FFFFFF'>;
    label_footprint_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.DefaultTo<'MediumBoldSystemFont'>;
    label_height: Schema.Attribute.Integer;
    label_horizontal_alignment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.DefaultTo<'center'>;
    label_source_key: Schema.Attribute.String;
    label_translation_left: Schema.Attribute.Integer;
    label_translation_top: Schema.Attribute.Integer;
    label_vertical_alignment: Schema.Attribute.Enumeration<
      ['top', 'center', 'bottom']
    >;
    label_width: Schema.Attribute.Integer;
    show_background: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    show_bar: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    show_icon: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    show_label: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    unfocused_icon_source_key: Schema.Attribute.String;
  };
}

export interface RokuCardType1 extends Struct.ComponentSchema {
  collectionName: 'components_roku_card_type1s';
  info: {
    description: 'Single image card with two labels and configurable background rectangle';
    displayName: 'Card Type 1';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    aspect_ratio: Schema.Attribute.Enumeration<
      [
        'aspect_1:1',
        'aspect_2:1',
        'aspect_2:3',
        'aspect_3:2',
        'aspect_3:4',
        'aspect_4:3',
        'aspect_5:3',
        'aspect_9:13',
        'aspect_9:16',
        'aspect_16:1',
        'aspect_16:2',
        'aspect_16:3',
        'aspect_16:4',
        'aspect_16:6',
        'aspect_16:7',
        'aspect_16:9',
        'aspect_21:9',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'aspect_16:9'>;
    background_rectangle_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    background_rectangle_focused_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    background_rectangle_focused_height: Schema.Attribute.Integer;
    background_rectangle_focused_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    background_rectangle_focused_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    background_rectangle_focused_width: Schema.Attribute.Integer;
    background_rectangle_height: Schema.Attribute.Integer;
    background_rectangle_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    background_rectangle_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    background_rectangle_width: Schema.Attribute.Integer;
    image_1_height: Schema.Attribute.Integer;
    image_1_object_fit: Schema.Attribute.Enumeration<
      ['ScaleToFit', 'ScaleToFill']
    > &
      Schema.Attribute.DefaultTo<'ScaleToFill'>;
    image_1_source_key: Schema.Attribute.String;
    image_1_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    image_1_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    image_1_width: Schema.Attribute.Integer;
    label_1_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label_1_custom_text: Schema.Attribute.String;
    label_1_focused_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label_1_focused_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    label_1_focused_height: Schema.Attribute.Integer;
    label_1_focused_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_1_focused_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_1_focused_width: Schema.Attribute.Integer;
    label_1_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    label_1_height: Schema.Attribute.Integer;
    label_1_horizontal_align: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.DefaultTo<'center'>;
    label_1_line_spacing: Schema.Attribute.Float;
    label_1_lines: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    label_1_source_key: Schema.Attribute.String;
    label_1_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_1_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_1_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    label_1_vertical_align: Schema.Attribute.Enumeration<
      ['top', 'center', 'bottom']
    > &
      Schema.Attribute.DefaultTo<'center'>;
    label_1_width: Schema.Attribute.Integer;
    label_2_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label_2_custom_text: Schema.Attribute.String;
    label_2_focused_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label_2_focused_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    label_2_focused_height: Schema.Attribute.Integer;
    label_2_focused_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_2_focused_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_2_focused_width: Schema.Attribute.Integer;
    label_2_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    label_2_height: Schema.Attribute.Integer;
    label_2_horizontal_align: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.DefaultTo<'center'>;
    label_2_line_spacing: Schema.Attribute.Float;
    label_2_lines: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    label_2_source_key: Schema.Attribute.String;
    label_2_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_2_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_2_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    label_2_vertical_align: Schema.Attribute.Enumeration<
      ['top', 'center', 'bottom']
    > &
      Schema.Attribute.DefaultTo<'center'>;
    label_2_width: Schema.Attribute.Integer;
    show_background_rectangle: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    show_background_rectangle_on_focus: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    show_image_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    show_image_1_on_focus: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    show_label_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    show_label_1_on_focus: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    show_label_2: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    show_label_2_on_focus: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface RokuCardType2 extends Struct.ComponentSchema {
  collectionName: 'components_roku_card_type2s';
  info: {
    description: 'Two images, three labels, background rectangle, badge, progress bar, and preview player';
    displayName: 'Card Type 2';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    aspect_ratio: Schema.Attribute.Enumeration<
      [
        'aspect_1:1',
        'aspect_2:1',
        'aspect_2:3',
        'aspect_3:2',
        'aspect_3:4',
        'aspect_4:3',
        'aspect_5:3',
        'aspect_9:13',
        'aspect_9:16',
        'aspect_16:1',
        'aspect_16:2',
        'aspect_16:3',
        'aspect_16:4',
        'aspect_16:6',
        'aspect_16:7',
        'aspect_16:9',
        'aspect_21:9',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'aspect_16:9'>;
    background_rectangle_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    background_rectangle_focused_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    background_rectangle_focused_height: Schema.Attribute.Integer;
    background_rectangle_focused_translation_left: Schema.Attribute.Integer;
    background_rectangle_focused_translation_top: Schema.Attribute.Integer;
    background_rectangle_focused_width: Schema.Attribute.Integer;
    background_rectangle_height: Schema.Attribute.Integer;
    background_rectangle_translation_left: Schema.Attribute.Integer;
    background_rectangle_translation_top: Schema.Attribute.Integer;
    background_rectangle_width: Schema.Attribute.Integer;
    badge_focused_height: Schema.Attribute.Integer;
    badge_focused_translation_left: Schema.Attribute.Integer;
    badge_focused_translation_top: Schema.Attribute.Integer;
    badge_focused_url: Schema.Attribute.String;
    badge_focused_width: Schema.Attribute.Integer;
    badge_height: Schema.Attribute.Integer;
    badge_translation_left: Schema.Attribute.Integer;
    badge_translation_top: Schema.Attribute.Integer;
    badge_url: Schema.Attribute.String;
    badge_width: Schema.Attribute.Integer;
    image_1_height: Schema.Attribute.Integer;
    image_1_object_fit: Schema.Attribute.Enumeration<
      ['ScaleToFit', 'ScaleToFill']
    >;
    image_1_overlay_image: Schema.Attribute.String;
    image_1_source_key: Schema.Attribute.String;
    image_1_translation_left: Schema.Attribute.Integer;
    image_1_translation_top: Schema.Attribute.Integer;
    image_1_width: Schema.Attribute.Integer;
    image_2_height: Schema.Attribute.Integer;
    image_2_object_fit: Schema.Attribute.Enumeration<
      ['ScaleToFit', 'ScaleToFill']
    >;
    image_2_source_key: Schema.Attribute.String;
    image_2_translation_left: Schema.Attribute.Integer;
    image_2_translation_top: Schema.Attribute.Integer;
    image_2_width: Schema.Attribute.Integer;
    label_1_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label_1_custom_text: Schema.Attribute.String;
    label_1_focused_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label_1_focused_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    label_1_focused_height: Schema.Attribute.Integer;
    label_1_focused_translation_left: Schema.Attribute.Integer;
    label_1_focused_translation_top: Schema.Attribute.Integer;
    label_1_focused_width: Schema.Attribute.Integer;
    label_1_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    label_1_height: Schema.Attribute.Integer;
    label_1_horizontal_align: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.DefaultTo<'center'>;
    label_1_line_spacing: Schema.Attribute.Float;
    label_1_lines: Schema.Attribute.Integer;
    label_1_source_key: Schema.Attribute.String;
    label_1_translation_left: Schema.Attribute.Integer;
    label_1_translation_top: Schema.Attribute.Integer;
    label_1_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    label_1_vertical_align: Schema.Attribute.Enumeration<
      ['top', 'center', 'bottom']
    > &
      Schema.Attribute.DefaultTo<'center'>;
    label_1_width: Schema.Attribute.Integer;
    label_2_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label_2_custom_text: Schema.Attribute.String;
    label_2_focused_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label_2_focused_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    label_2_focused_height: Schema.Attribute.Integer;
    label_2_focused_translation_left: Schema.Attribute.Integer;
    label_2_focused_translation_top: Schema.Attribute.Integer;
    label_2_focused_width: Schema.Attribute.Integer;
    label_2_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    label_2_height: Schema.Attribute.Integer;
    label_2_horizontal_align: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.DefaultTo<'center'>;
    label_2_line_spacing: Schema.Attribute.Float;
    label_2_lines: Schema.Attribute.Integer;
    label_2_source_key: Schema.Attribute.String;
    label_2_translation_left: Schema.Attribute.Integer;
    label_2_translation_top: Schema.Attribute.Integer;
    label_2_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    label_2_vertical_align: Schema.Attribute.Enumeration<
      ['top', 'center', 'bottom']
    > &
      Schema.Attribute.DefaultTo<'center'>;
    label_2_width: Schema.Attribute.Integer;
    label_3_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label_3_custom_text: Schema.Attribute.String;
    label_3_focused_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label_3_focused_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    label_3_focused_height: Schema.Attribute.Integer;
    label_3_focused_translation_left: Schema.Attribute.Integer;
    label_3_focused_translation_top: Schema.Attribute.Integer;
    label_3_focused_width: Schema.Attribute.Integer;
    label_3_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    label_3_height: Schema.Attribute.Integer;
    label_3_horizontal_align: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.DefaultTo<'center'>;
    label_3_line_spacing: Schema.Attribute.Float;
    label_3_lines: Schema.Attribute.Integer;
    label_3_source_key: Schema.Attribute.String;
    label_3_translation_left: Schema.Attribute.Integer;
    label_3_translation_top: Schema.Attribute.Integer;
    label_3_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    label_3_vertical_align: Schema.Attribute.Enumeration<
      ['top', 'center', 'bottom']
    > &
      Schema.Attribute.DefaultTo<'center'>;
    label_3_width: Schema.Attribute.Integer;
    preview_player_delay: Schema.Attribute.Integer;
    preview_player_enable_volume: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    preview_player_height: Schema.Attribute.Integer;
    preview_player_repeat_count: Schema.Attribute.Integer;
    preview_player_translation_left: Schema.Attribute.Integer;
    preview_player_translation_top: Schema.Attribute.Integer;
    preview_player_video_end_time_key: Schema.Attribute.String;
    preview_player_video_source_key: Schema.Attribute.String;
    preview_player_video_start_time_key: Schema.Attribute.String;
    preview_player_width: Schema.Attribute.Integer;
    progress_bar_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    progress_bar_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    progress_bar_height: Schema.Attribute.Integer;
    progress_bar_source_key: Schema.Attribute.String;
    progress_bar_translation_left: Schema.Attribute.Integer;
    progress_bar_translation_top: Schema.Attribute.Integer;
    progress_bar_width: Schema.Attribute.Integer;
    show_background_rectangle: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    show_background_rectangle_on_focus: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    show_badge: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    show_badge_on_focus: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    show_image_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    show_image_1_on_focus: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    show_image_2: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    show_image_2_on_focus: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    show_label_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    show_label_1_on_focus: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    show_label_2: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    show_label_2_on_focus: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    show_label_3: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    show_label_3_on_focus: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    show_preview_player: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    show_progress_bar: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface RokuColor extends Struct.ComponentSchema {
  collectionName: 'components_roku_colors';
  info: {
    displayName: 'Color';
  };
  attributes: {
    hex: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    opacity: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<100>;
  };
}

export interface RokuCorner extends Struct.ComponentSchema {
  collectionName: 'components_roku_corners';
  info: {
    displayName: 'Corner';
  };
  attributes: {
    bottomLeft: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    bottomRight: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    topLeft: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    topRight: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface RokuCuration extends Struct.ComponentSchema {
  collectionName: 'components_roku_curations';
  info: {
    displayName: 'Curation';
  };
  attributes: {
    feed: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RokuFeedContext extends Struct.ComponentSchema {
  collectionName: 'components_roku_feed_contexts';
  info: {
    displayName: 'Feed Context';
  };
  attributes: {
    context_key: Schema.Attribute.Enumeration<
      [
        'bundle_identifier',
        'advertising_identifier',
        'uuid',
        'os_version',
        'device_model',
        'device_make',
        'device_name',
        'device_type',
        'user_agent',
        'device_width',
        'device_height',
        'time_zone_offset',
        'platform',
        'sdk_version',
        'version_name',
        'layout_id',
        'is_debug',
        'language_code',
        'language_locale',
        'store',
        'signed_device_info_token',
        'browser',
      ]
    > &
      Schema.Attribute.Required;
    context_type: Schema.Attribute.Enumeration<
      ['query_param', 'header', 'authentication']
    > &
      Schema.Attribute.Required;
    rename_key: Schema.Attribute.String;
  };
}

export interface RokuFixedImage extends Struct.ComponentSchema {
  collectionName: 'components_roku_fixed_images';
  info: {
    displayName: 'Fixed Image';
  };
  attributes: {
    height: Schema.Attribute.Integer & Schema.Attribute.Required;
    position: Schema.Attribute.Enumeration<
      [
        'topLeft',
        'topCenter',
        'topRight',
        'center',
        'centerLeft',
        'centerRight',
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'center'>;
    source_key: Schema.Attribute.String & Schema.Attribute.Required;
    translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    width: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface RokuGrid extends Struct.ComponentSchema {
  collectionName: 'components_roku_grids';
  info: {
    description: 'Configurable grid supporting pagination, lazy loading, and multiple card types';
    displayName: 'Grid';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    card_style: Schema.Attribute.Relation<
      'oneToOne',
      'api::roku-card-style.roku-card-style'
    >;
    cells_focusable: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    column_count: Schema.Attribute.Integer & Schema.Attribute.Required;
    column_gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    enable_title: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    feed: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
    focus_animation_style: Schema.Attribute.Enumeration<
      ['fixedFocus', 'floatingFocus', 'fixedFocusWrap']
    > &
      Schema.Attribute.DefaultTo<'fixedFocus'>;
    focus_bitmap_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    focus_bitmap_url: Schema.Attribute.String;
    item_limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<20>;
    lazy_load_row_count: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    row_count: Schema.Attribute.Integer & Schema.Attribute.Required;
    row_gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    row_reload_offset: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    title_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title_custom_text: Schema.Attribute.String;
    title_focused_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    title_height: Schema.Attribute.Integer;
    title_source_key: Schema.Attribute.String;
    title_translation_bottom: Schema.Attribute.Integer;
    title_translation_left: Schema.Attribute.Integer;
    title_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    translation_bottom: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_right: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface RokuHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_roku_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    button_1_action: Schema.Attribute.Enumeration<
      ['play', 'trailer', 'favorite']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'play'>;
    button_1_enable_icon: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    button_1_height: Schema.Attribute.Integer & Schema.Attribute.Required;
    button_1_icon_focus_icon_url: Schema.Attribute.String &
      Schema.Attribute.Required;
    button_1_icon_height: Schema.Attribute.Integer & Schema.Attribute.Required;
    button_1_icon_icon_url: Schema.Attribute.String & Schema.Attribute.Required;
    button_1_icon_position: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    button_1_icon_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_1_icon_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_1_icon_width: Schema.Attribute.Integer & Schema.Attribute.Required;
    button_1_label_align: Schema.Attribute.Enumeration<
      ['left', 'right', 'center']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    button_1_label_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    button_1_label_custom_text: Schema.Attribute.String;
    button_1_label_focus_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    button_1_label_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    button_1_label_height: Schema.Attribute.Integer;
    button_1_label_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    button_1_label_source_key: Schema.Attribute.String &
      Schema.Attribute.Required;
    button_1_label_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_1_label_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_1_label_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    button_1_label_width: Schema.Attribute.Integer & Schema.Attribute.Required;
    button_1_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_1_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_1_width: Schema.Attribute.Integer & Schema.Attribute.Required;
    button_2_action: Schema.Attribute.Enumeration<
      ['play', 'trailer', 'favorite']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'play'>;
    button_2_enable_icon: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    button_2_height: Schema.Attribute.Integer & Schema.Attribute.Required;
    button_2_icon_focus_icon_url: Schema.Attribute.String &
      Schema.Attribute.Required;
    button_2_icon_height: Schema.Attribute.Integer & Schema.Attribute.Required;
    button_2_icon_icon_url: Schema.Attribute.String & Schema.Attribute.Required;
    button_2_icon_position: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    button_2_icon_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_2_icon_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_2_icon_width: Schema.Attribute.Integer & Schema.Attribute.Required;
    button_2_label_align: Schema.Attribute.Enumeration<
      ['left', 'right', 'center']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    button_2_label_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    button_2_label_custom_text: Schema.Attribute.String;
    button_2_label_focus_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    button_2_label_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    button_2_label_height: Schema.Attribute.Integer;
    button_2_label_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    button_2_label_source_key: Schema.Attribute.String &
      Schema.Attribute.Required;
    button_2_label_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_2_label_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_2_label_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    button_2_label_width: Schema.Attribute.Integer & Schema.Attribute.Required;
    button_2_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_2_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_2_width: Schema.Attribute.Integer & Schema.Attribute.Required;
    button_3_action: Schema.Attribute.Enumeration<
      ['play', 'trailer', 'favorite']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'play'>;
    button_3_enable_icon: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    button_3_height: Schema.Attribute.Integer & Schema.Attribute.Required;
    button_3_icon_focus_icon_url: Schema.Attribute.String &
      Schema.Attribute.Required;
    button_3_icon_height: Schema.Attribute.Integer & Schema.Attribute.Required;
    button_3_icon_icon_url: Schema.Attribute.String & Schema.Attribute.Required;
    button_3_icon_position: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    button_3_icon_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_3_icon_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_3_icon_width: Schema.Attribute.Integer & Schema.Attribute.Required;
    button_3_label_align: Schema.Attribute.Enumeration<
      ['left', 'right', 'center']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    button_3_label_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    button_3_label_custom_text: Schema.Attribute.String;
    button_3_label_focus_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    button_3_label_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    button_3_label_height: Schema.Attribute.Integer;
    button_3_label_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    button_3_label_source_key: Schema.Attribute.String &
      Schema.Attribute.Required;
    button_3_label_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_3_label_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_3_label_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    button_3_label_width: Schema.Attribute.Integer & Schema.Attribute.Required;
    button_3_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_3_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    button_3_width: Schema.Attribute.Integer & Schema.Attribute.Required;
    enable_button_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_button_2: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_button_3: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_title_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_title_2: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_title_3: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    feed: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
    image_aspect_ratio: Schema.Attribute.Enumeration<
      [
        'aspectRatio_16:9',
        'aspectRatio_16:6',
        'aspectRatio_16:2',
        'aspectRatio_1:1',
        'aspectRatio_2:3',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'aspectRatio_16:9'>;
    image_height: Schema.Attribute.Integer & Schema.Attribute.Required;
    image_source_key: Schema.Attribute.String & Schema.Attribute.Required;
    image_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    image_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    image_width: Schema.Attribute.Integer & Schema.Attribute.Required;
    mask_image_url: Schema.Attribute.String;
    name: Schema.Attribute.String;
    secondary_image_height: Schema.Attribute.Integer &
      Schema.Attribute.Required;
    secondary_image_position: Schema.Attribute.Enumeration<
      [
        'topLeft',
        'topCenter',
        'topRight',
        'center',
        'centerLeft',
        'centerRight',
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'center'>;
    secondary_image_source_key: Schema.Attribute.String &
      Schema.Attribute.Required;
    secondary_image_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    secondary_image_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    secondary_image_width: Schema.Attribute.Integer & Schema.Attribute.Required;
    title_1_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    title_1_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title_1_custom_text: Schema.Attribute.String;
    title_1_focus_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title_1_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    title_1_height: Schema.Attribute.Integer;
    title_1_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_1_source_key: Schema.Attribute.String & Schema.Attribute.Required;
    title_1_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    title_1_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    title_1_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title_1_width: Schema.Attribute.Integer & Schema.Attribute.Required;
    title_2_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    title_2_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title_2_custom_text: Schema.Attribute.String;
    title_2_focus_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title_2_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    title_2_height: Schema.Attribute.Integer;
    title_2_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_2_source_key: Schema.Attribute.String & Schema.Attribute.Required;
    title_2_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    title_2_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    title_2_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title_2_width: Schema.Attribute.Integer & Schema.Attribute.Required;
    title_3_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    title_3_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title_3_custom_text: Schema.Attribute.String;
    title_3_focus_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title_3_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    title_3_height: Schema.Attribute.Integer;
    title_3_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_3_source_key: Schema.Attribute.String & Schema.Attribute.Required;
    title_3_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    title_3_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    title_3_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title_3_width: Schema.Attribute.Integer & Schema.Attribute.Required;
    use_mask_image: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    use_secondary_image: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface RokuHorizontalList extends Struct.ComponentSchema {
  collectionName: 'components_roku_horizontal_lists';
  info: {
    description: 'Horizontally scrollable list with lazy loading, pagination, focus behavior, and pagination dots';
    displayName: 'Horizontal List';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    auto_scroll_interval: Schema.Attribute.Integer;
    card_style: Schema.Attribute.Relation<
      'oneToOne',
      'api::roku-card-style.roku-card-style'
    >;
    cell_gap: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    cells_focusable: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    cells_per_view: Schema.Attribute.Integer & Schema.Attribute.Required;
    enable_auto_scroll: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    enable_pagination_dots: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    enable_title: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    feed: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
    focus_animation_style: Schema.Attribute.Enumeration<
      ['fixedFocus', 'floatingFocus', 'fixedFocusWrap']
    > &
      Schema.Attribute.DefaultTo<'fixedFocus'>;
    focus_bitmap_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    focus_bitmap_url: Schema.Attribute.String;
    focus_height: Schema.Attribute.Integer;
    item_limit: Schema.Attribute.Integer;
    item_reload_offset: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    lazy_load_item_count: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    list_translation_bottom: Schema.Attribute.Integer;
    list_translation_left: Schema.Attribute.Integer;
    list_translation_top: Schema.Attribute.Integer;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    pagination_dots_dot_size: Schema.Attribute.Integer;
    pagination_dots_gap: Schema.Attribute.Integer;
    pagination_dots_selected_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    pagination_dots_translation_left: Schema.Attribute.Integer;
    pagination_dots_translation_top: Schema.Attribute.Integer;
    pagination_dots_unselected_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    peek_offset: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    row_gap: Schema.Attribute.Integer;
    show_row_counter: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    title_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title_custom_text: Schema.Attribute.String;
    title_focused_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title_font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    title_source_key: Schema.Attribute.String;
    title_translation_bottom: Schema.Attribute.Integer;
    title_translation_left: Schema.Attribute.Integer;
    title_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface RokuImage extends Struct.ComponentSchema {
  collectionName: 'components_roku_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    aspect_ratio: Schema.Attribute.Enumeration<
      [
        'aspectRatio_16:9',
        'aspectRatio_16:6',
        'aspectRatio_16:2',
        'aspectRatio_1:1',
        'aspectRatio_2:3',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'aspectRatio_16:9'>;
    height: Schema.Attribute.Integer & Schema.Attribute.Required;
    source_key: Schema.Attribute.String & Schema.Attribute.Required;
    translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    width: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface RokuLockBadge extends Struct.ComponentSchema {
  collectionName: 'components_roku_lock_badges';
  info: {
    displayName: 'Lock Badge';
  };
  attributes: {
    height: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<30>;
    lock_icon_url: Schema.Attribute.String & Schema.Attribute.Required;
    position: Schema.Attribute.Enumeration<
      [
        'topLeft',
        'topCenter',
        'topRight',
        'bottomRight',
        'bottomCenter',
        'bottomLeft',
      ]
    >;
    source_key: Schema.Attribute.String & Schema.Attribute.Required;
    translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    unlock_icon_url: Schema.Attribute.String;
    width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<30>;
  };
}

export interface RokuLogin extends Struct.ComponentSchema {
  collectionName: 'components_roku_logins';
  info: {
    displayName: 'Login';
  };
  attributes: {
    login_template: Schema.Attribute.Enumeration<['login_template_1']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'login_template_1'>;
    login_template_1: Schema.Attribute.Component<
      'roku.login-template-1',
      false
    > &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RokuLoginTemplate1 extends Struct.ComponentSchema {
  collectionName: 'components_roku_login_template_1s';
  info: {
    displayName: 'Login Template 1';
  };
  attributes: {
    buttons_group_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1050>;
    buttons_group_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<330>;
    buttons_style: Schema.Attribute.Relation<
      'oneToOne',
      'api::roku-card-style.roku-card-style'
    >;
    enable_logo: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    error_label_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    error_label_font: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
      ]
    > &
      Schema.Attribute.DefaultTo<'TinySystemFont'>;
    error_label_translation_left: Schema.Attribute.Integer;
    error_label_translation_top: Schema.Attribute.Integer;
    error_label_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<600>;
    forgot_password_button_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Forgot Password'>;
    forgot_password_buttons_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<10>;
    forgot_password_email_placeholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Email'>;
    forgot_password_error_text: Schema.Attribute.String;
    forgot_password_input_boxes_spacing: Schema.Attribute.Integer;
    forgot_password_optional_title_1_text: Schema.Attribute.String;
    forgot_password_optional_title_2_text: Schema.Attribute.String;
    forgot_password_sub_title_text: Schema.Attribute.String;
    forgot_password_title_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Forgot Password'>;
    input_box_style: Schema.Attribute.Relation<
      'oneToOne',
      'api::roku-card-style.roku-card-style'
    >;
    labels_group_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<200>;
    labels_group_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<330>;
    login_button_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Login'>;
    login_buttons_spacing: Schema.Attribute.Integer;
    login_email_placeholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Email'>;
    login_error_text: Schema.Attribute.String;
    login_input_boxes_spacing: Schema.Attribute.Integer;
    login_optional_title_1_text: Schema.Attribute.String;
    login_optional_title_2_text: Schema.Attribute.String;
    login_password_placeholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Password'>;
    login_sub_title_text: Schema.Attribute.String;
    login_title_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Login'>;
    login_url: Schema.Attribute.String & Schema.Attribute.Required;
    logo_height: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<150>;
    logo_translation_left: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<200>;
    logo_translation_top: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<150>;
    logo_url: Schema.Attribute.String;
    logo_width: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<300>;
    optional_title_1_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    optional_title_1_font: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
      ]
    >;
    optional_title_1_y_offset: Schema.Attribute.Integer;
    optional_title_2_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    optional_title_2_font: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
      ]
    >;
    optional_title_2_y_offset: Schema.Attribute.Integer;
    refresh_url: Schema.Attribute.String & Schema.Attribute.Required;
    register_button_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Sign Up'>;
    register_buttons_spacing: Schema.Attribute.Integer;
    register_email_placeholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Email'>;
    register_error_text: Schema.Attribute.String;
    register_first_name_placeholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'First Name'>;
    register_input_boxes_spacing: Schema.Attribute.Integer;
    register_last_name_placeholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Last Name'>;
    register_optional_title_1_text: Schema.Attribute.String;
    register_optional_title_2_text: Schema.Attribute.String;
    register_password_placeholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Password'>;
    register_sub_title_text: Schema.Attribute.String;
    register_title_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Sign Up'>;
    register_url: Schema.Attribute.String & Schema.Attribute.Required;
    reset_url: Schema.Attribute.String & Schema.Attribute.Required;
    sub_title_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    sub_title_font: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
      ]
    >;
    sub_title_y_offset: Schema.Attribute.Integer;
    title_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title_font: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
      ]
    >;
  };
}

export interface RokuPaginationDots extends Struct.ComponentSchema {
  collectionName: 'components_roku_pagination_dots';
  info: {
    displayName: 'Pagination Dots';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<5>;
    selected_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    size: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<10>;
    translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface RokuPreviewPlayback extends Struct.ComponentSchema {
  collectionName: 'components_roku_preview_playbacks';
  info: {
    displayName: 'Preview Playback';
  };
  attributes: {
    default_audio_mode: Schema.Attribute.Enumeration<['mute', 'unMute']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'mute'>;
    delay: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'5000'>;
    end_time_source_key: Schema.Attribute.String;
    loop_count: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    source_key: Schema.Attribute.String & Schema.Attribute.Required;
    start_time_source_key: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RokuProgressBar extends Struct.ComponentSchema {
  collectionName: 'components_roku_progress_bars';
  info: {
    displayName: 'Progress Bar';
  };
  attributes: {
    height: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<4>;
    progress_bar_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    source_key: Schema.Attribute.String;
    total_bar_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface RokuRokuPlayer extends Struct.ComponentSchema {
  collectionName: 'components_roku_roku_players';
  info: {
    displayName: 'Roku Player';
  };
  attributes: {
    bif_frame_bg_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    bif_frame_bg_image_uri: Schema.Attribute.String;
    captions_background_color: Schema.Attribute.Enumeration<
      [
        'default',
        'White',
        'Black',
        'Red',
        'Green',
        'Blue',
        'Yellow',
        'Magenta',
        'Cyan',
      ]
    > &
      Schema.Attribute.DefaultTo<'default'>;
    captions_background_opacity: Schema.Attribute.Enumeration<
      ['default', 'percent_25%', 'percent_50%', 'percent_75%', 'percent_100%']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    captions_text_color: Schema.Attribute.Enumeration<
      [
        'default',
        'White',
        'Black',
        'Red',
        'Green',
        'Blue',
        'Yellow',
        'Magenta',
        'Cyan',
      ]
    > &
      Schema.Attribute.DefaultTo<'default'>;
    captions_text_effect: Schema.Attribute.Enumeration<
      [
        'default',
        'None',
        'Raised',
        'Depressed',
        'Uniform',
        'Drop shadow (left)',
        'Drop shadow (right)',
      ]
    > &
      Schema.Attribute.DefaultTo<'default'>;
    captions_text_opacity: Schema.Attribute.Enumeration<
      ['default', 'percent_25%', 'percent_50%', 'percent_75%', 'percent_100%']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    captions_text_size: Schema.Attribute.Enumeration<
      ['default', 'Large', 'Medium', 'Small']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    captions_text_style: Schema.Attribute.Enumeration<
      [
        'default',
        'Serif Fixed Width',
        'Serif Proportional',
        'Sans Serif Fixed Width',
        'Sans Serif Proportional',
        'Casual',
        'Cursive',
        'Small Caps',
      ]
    > &
      Schema.Attribute.DefaultTo<'default'>;
    captions_window_color: Schema.Attribute.Enumeration<
      [
        'default',
        'White',
        'Black',
        'Red',
        'Green',
        'Blue',
        'Yellow',
        'Magenta',
        'Cyan',
      ]
    > &
      Schema.Attribute.DefaultTo<'default'>;
    captions_window_opacity: Schema.Attribute.Enumeration<
      ['default', 'percent_25%', 'percent_50%', 'percent_75%', 'percent_100%']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    enable_ads: Schema.Attribute.Boolean;
    enable_captions: Schema.Attribute.Boolean;
    enable_trickplay: Schema.Attribute.Boolean;
    feed: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
    player_height: Schema.Attribute.Integer;
    trickplay_background_overlay: Schema.Attribute.String;
    trickplay_text_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    trickplaybar_current_time_marker_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    trickplaybar_filled_bar_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    trickplaybar_filled_bar_image_url: Schema.Attribute.String;
    trickplaybar_thumb_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    trickplaybar_track_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    trickplaybar_track_image_url: Schema.Attribute.String;
    video_source_key: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RokuSpacing extends Struct.ComponentSchema {
  collectionName: 'components_roku_spacings';
  info: {
    displayName: 'Translation';
  };
  attributes: {
    left: Schema.Attribute.Integer & Schema.Attribute.Required;
    top: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface RokuText extends Struct.ComponentSchema {
  collectionName: 'components_roku_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    custom_text: Schema.Attribute.String;
    focus_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    font_family: Schema.Attribute.Enumeration<
      [
        'TinySystemFont',
        'TinyBoldSystemFont',
        'SmallerSystemFont',
        'SmallerBoldSystemFont',
        'SmallestSystemFont',
        'SmallestBoldSystemFont',
        'SmallSystemFont',
        'SmallBoldSystemFont',
        'MediumSystemFont',
        'MediumBoldSystemFont',
        'LargeSystemFont',
        'LargeBoldSystemFont',
        'LargestSystemFont',
        'ExtraLargeSystemFont',
        'ExtraLargeBoldSystemFont',
        'BadgeSystemFont',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'MediumSystemFont'>;
    height: Schema.Attribute.Integer;
    lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    source_key: Schema.Attribute.String & Schema.Attribute.Required;
    translation_left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    translation_top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    width: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface WebActionButton extends Struct.ComponentSchema {
  collectionName: 'components_web_action_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Component<'web.color', false> &
      Schema.Attribute.Required;
    border: Schema.Attribute.Component<'web.border', false>;
    contentAlignment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    displayMode: Schema.Attribute.Enumeration<['Fix', 'Dynamic']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Dynamic'>;
    enableIcon: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enableLabel: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    height: Schema.Attribute.Integer & Schema.Attribute.Required;
    hoverBackgroundColor: Schema.Attribute.Component<'web.color', false>;
    hoverBorder: Schema.Attribute.Component<'web.border', false>;
    icon: Schema.Attribute.Component<'web.icon', false>;
    iconPosition: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.DefaultTo<'right'>;
    label: Schema.Attribute.Component<'web.button-label', false>;
    margin: Schema.Attribute.Component<'web.spacing', false>;
    padding: Schema.Attribute.Component<'web.spacing', false>;
    selectedBackgroundColor: Schema.Attribute.Component<'web.color', false>;
    selectedBorder: Schema.Attribute.Component<'web.border', false>;
    width: Schema.Attribute.Integer;
  };
}

export interface WebActionIcon extends Struct.ComponentSchema {
  collectionName: 'components_web_action_icons';
  info: {
    displayName: 'Action Icon';
  };
  attributes: {
    action: Schema.Attribute.Enumeration<['play', 'myList', 'share']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'play'>;
    height: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<40>;
    hoverIconUrl: Schema.Attribute.String;
    iconUrl: Schema.Attribute.String & Schema.Attribute.Required;
    margin: Schema.Attribute.Component<'web.spacing', false>;
    width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<40>;
  };
}

export interface WebActionIconsGroup extends Struct.ComponentSchema {
  collectionName: 'components_web_action_icons_groups';
  info: {
    displayName: 'Action Icons Group';
  };
  attributes: {
    actionIcons: Schema.Attribute.Component<'web.action-icon', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<10>;
    margin: Schema.Attribute.Component<'web.spacing', false>;
  };
}

export interface WebAutoSlide extends Struct.ComponentSchema {
  collectionName: 'components_web_auto_slides';
  info: {
    displayName: 'Auto Slide';
  };
  attributes: {
    numberOfTiles: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    seconds: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
  };
}

export interface WebBackgroundImage extends Struct.ComponentSchema {
  collectionName: 'components_web_background_images';
  info: {
    displayName: 'Secondary Image';
  };
  attributes: {
    aspectRatio: Schema.Attribute.Enumeration<
      [
        'aspectRatio_16:9',
        'aspectRatio_16:6',
        'aspectRatio_16:2',
        'aspectRatio_1:1',
        'aspectRatio_2:3',
      ]
    >;
    margin: Schema.Attribute.Component<'web.spacing', false>;
    objectFit: Schema.Attribute.Enumeration<
      ['contain', 'cover', 'fill', 'none', 'scale-down']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'cover'>;
    padding: Schema.Attribute.Component<'web.spacing', false>;
    position: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.DefaultTo<'right'>;
    sourceKey: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WebBadge extends Struct.ComponentSchema {
  collectionName: 'components_web_badges';
  info: {
    displayName: 'Badge';
  };
  attributes: {
    badgeIcon: Schema.Attribute.String & Schema.Attribute.Required;
    entityType: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    hoverBadgeIcon: Schema.Attribute.String;
    margin: Schema.Attribute.Component<'web.spacing', false>;
    padding: Schema.Attribute.Component<'web.spacing', false>;
    position: Schema.Attribute.Enumeration<
      [
        'topLeft',
        'topCenter',
        'topRight',
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
      ]
    > &
      Schema.Attribute.DefaultTo<'bottomRight'>;
    width: Schema.Attribute.Integer;
  };
}

export interface WebBorder extends Struct.ComponentSchema {
  collectionName: 'components_web_borders';
  info: {
    displayName: 'Border';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface WebButtonGroup extends Struct.ComponentSchema {
  collectionName: 'components_web_button_groups';
  info: {
    displayName: 'Button Group';
  };
  attributes: {
    enableMaxWidth: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    horizontalGap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<8>;
    margin: Schema.Attribute.Component<'web.spacing', false> &
      Schema.Attribute.Required;
    maxWidth: Schema.Attribute.Integer;
    stacking: Schema.Attribute.Enumeration<['horizontal', 'vertical']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'horizontal'>;
    verticalGap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<8>;
  };
}

export interface WebButtonLabel extends Struct.ComponentSchema {
  collectionName: 'components_web_button_labels';
  info: {
    displayName: 'Button Label';
  };
  attributes: {
    color: Schema.Attribute.Component<'web.color', false>;
    customLabel: Schema.Attribute.String;
    enableCustomLabel: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    fontFamily: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'serif'>;
    fontHeight: Schema.Attribute.Integer & Schema.Attribute.Required;
    fontSize: Schema.Attribute.Integer & Schema.Attribute.Required;
    fontSpacing: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    fontWeight: Schema.Attribute.Enumeration<
      ['normal', 'bold', 'bolder', 'lighter']
    >;
    hoverColor: Schema.Attribute.Component<'web.color', false>;
    hoverTextDecoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    margin: Schema.Attribute.Component<'web.spacing', false>;
    padding: Schema.Attribute.Component<'web.spacing', false>;
    selectedColor: Schema.Attribute.Component<'web.color', false>;
    sourceKey: Schema.Attribute.String;
    textDecoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    textTransform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
  };
}

export interface WebCardType2 extends Struct.ComponentSchema {
  collectionName: 'components_web_card_type_2s';
  info: {
    displayName: 'Card Type 2';
  };
  attributes: {
    action_icon_1_action: Schema.Attribute.Enumeration<
      ['play', 'myList', 'share']
    > &
      Schema.Attribute.DefaultTo<'play'>;
    action_icon_1_height: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<40>;
    action_icon_1_hover_icon_url: Schema.Attribute.String;
    action_icon_1_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    action_icon_1_url: Schema.Attribute.String;
    action_icon_1_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<40>;
    action_icon_2_action: Schema.Attribute.Enumeration<
      ['play', 'myList', 'share']
    > &
      Schema.Attribute.DefaultTo<'play'>;
    action_icon_2_height: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<40>;
    action_icon_2_hover_icon_url: Schema.Attribute.String;
    action_icon_2_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    action_icon_2_url: Schema.Attribute.String;
    action_icon_2_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<40>;
    action_icon_group_align: Schema.Attribute.Enumeration<
      ['left', 'right', 'center']
    > &
      Schema.Attribute.DefaultTo<'left'>;
    action_icon_group_gap: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<10>;
    action_icon_group_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    background_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    badge_1_entity_type: Schema.Attribute.String;
    badge_1_height: Schema.Attribute.Integer;
    badge_1_hover_badge_icon: Schema.Attribute.String;
    badge_1_icon: Schema.Attribute.String;
    badge_1_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    badge_1_position: Schema.Attribute.Enumeration<
      [
        'topLeft',
        'topCenter',
        'topRight',
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
      ]
    > &
      Schema.Attribute.DefaultTo<'bottomRight'>;
    badge_1_width: Schema.Attribute.Integer;
    badge_2_entity_type: Schema.Attribute.String;
    badge_2_height: Schema.Attribute.Integer;
    badge_2_hover_badge_icon: Schema.Attribute.String;
    badge_2_icon: Schema.Attribute.String;
    badge_2_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    badge_2_position: Schema.Attribute.Enumeration<
      [
        'topLeft',
        'topCenter',
        'topRight',
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
      ]
    > &
      Schema.Attribute.DefaultTo<'bottomRight'>;
    badge_2_width: Schema.Attribute.Integer;
    border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    border_width: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    enable_action_icon_1: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    enable_action_icon_2: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    enable_action_icons: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_badge_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_badge_2: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_lock_badge: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_preview_playback: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_progress_bar: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_tag: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_title_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_title_2: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_title_3: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    hover_scaling: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1.1>;
    image_aspect_ratio: Schema.Attribute.Enumeration<
      [
        'aspectRatio_1:1',
        'aspectRatio_2:1',
        'aspectRatio_2:3',
        'aspectRatio_3:4',
        'aspectRatio_4:3',
        'aspectRatio_5:3',
        'aspectRatio_5:6',
        'aspectRatio_9:13',
        'aspectRatio_9:16',
        'aspectRatio_12:4',
        'aspectRatio_16:1',
        'aspectRatio_16:2',
        'aspectRatio_16:4',
        'aspectRatio_16:5',
        'aspectRatio_16:6',
        'aspectRatio_16:7',
        'aspectRatio_16:9',
        'aspectRatio_19:5',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'aspectRatio_16:9'>;
    image_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    image_object_fit: Schema.Attribute.Enumeration<
      ['contain', 'cover', 'fill', 'none', 'scaleDown']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'cover'>;
    image_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    image_placeholder_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    image_source_key: Schema.Attribute.String & Schema.Attribute.Required;
    lock_badge_height: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<30>;
    lock_badge_lock_icon_url: Schema.Attribute.String;
    lock_badge_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    lock_badge_position: Schema.Attribute.Enumeration<
      [
        'topLeft',
        'topCenter',
        'topRight',
        'bottomRight',
        'bottomCenter',
        'bottomLeft',
      ]
    >;
    lock_badge_source_key: Schema.Attribute.String;
    lock_badge_unlock_icon_url: Schema.Attribute.String;
    lock_badge_width: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<30>;
    margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    preview_playback_default_audio_mode: Schema.Attribute.Enumeration<
      ['mute', 'unMute']
    > &
      Schema.Attribute.DefaultTo<'mute'>;
    preview_playback_delay: Schema.Attribute.BigInteger &
      Schema.Attribute.DefaultTo<'5000'>;
    preview_playback_end_time_source_key: Schema.Attribute.String;
    preview_playback_loop_count: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    preview_playback_source_key: Schema.Attribute.String;
    preview_playback_start_time_source_key: Schema.Attribute.String;
    progress_bar_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    progress_bar_corner_radius: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<4>;
    progress_bar_height: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<4>;
    progress_bar_hide_unwatched: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    progress_bar_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    progress_bar_position: Schema.Attribute.Enumeration<['top', 'bottom']> &
      Schema.Attribute.DefaultTo<'bottom'>;
    progress_bar_total_bar_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    progress_bar_total_bar_corner_radius: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<4>;
    tag_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    tag_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    tag_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    tag_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    tag_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    tag_border_width: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    tag_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    tag_font_size: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<10>;
    tag_font_spacing: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    tag_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.DefaultTo<'regular'>;
    tag_height: Schema.Attribute.Integer;
    tag_hover_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    tag_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    tag_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    tag_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    tag_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    tag_hover_text_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    tag_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    tag_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    tag_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    tag_position: Schema.Attribute.Enumeration<
      [
        'topLeft',
        'topCenter',
        'topRight',
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
      ]
    > &
      Schema.Attribute.DefaultTo<'bottomRight'>;
    tag_source_key: Schema.Attribute.String;
    tag_text_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    tag_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    tag_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    title_1_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    title_1_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_1_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_1_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    title_1_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    title_1_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    title_1_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_1_custom_text: Schema.Attribute.String;
    title_1_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    title_1_font_size: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<10>;
    title_1_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    title_1_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.DefaultTo<'regular'>;
    title_1_height: Schema.Attribute.Integer;
    title_1_hover_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_1_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_1_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    title_1_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    title_1_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    title_1_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_1_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_1_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_1_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_1_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_1_source_key: Schema.Attribute.String;
    title_1_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_1_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    title_1_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    title_2_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    title_2_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_2_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_2_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    title_2_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    title_2_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    title_2_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_2_custom_text: Schema.Attribute.String;
    title_2_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    title_2_font_size: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<10>;
    title_2_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    title_2_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.DefaultTo<'regular'>;
    title_2_height: Schema.Attribute.Integer;
    title_2_hover_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_2_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_2_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    title_2_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    title_2_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    title_2_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_2_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_2_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_2_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_2_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_2_source_key: Schema.Attribute.String;
    title_2_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_2_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    title_2_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    title_3_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    title_3_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_3_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_3_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    title_3_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    title_3_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    title_3_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_3_custom_text: Schema.Attribute.String;
    title_3_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    title_3_font_size: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<10>;
    title_3_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    title_3_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.DefaultTo<'regular'>;
    title_3_height: Schema.Attribute.Integer;
    title_3_hover_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_3_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_3_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    title_3_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    title_3_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    title_3_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_3_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_3_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_3_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_3_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_3_source_key: Schema.Attribute.String;
    title_3_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_3_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    title_3_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface WebCardType1 extends Struct.ComponentSchema {
  collectionName: 'components_web_card_type1s';
  info: {
    displayName: 'Card Type 1';
    icon: 'picture';
  };
  attributes: {
    background_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    badge_1_entity_type: Schema.Attribute.String;
    badge_1_height: Schema.Attribute.Integer;
    badge_1_hover_icon: Schema.Attribute.String;
    badge_1_icon: Schema.Attribute.String;
    badge_1_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    badge_1_position: Schema.Attribute.Enumeration<
      [
        'topLeft',
        'topCenter',
        'topRight',
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
      ]
    > &
      Schema.Attribute.DefaultTo<'bottomRight'>;
    badge_1_width: Schema.Attribute.Integer;
    badge_2_entity_type: Schema.Attribute.String;
    badge_2_height: Schema.Attribute.Integer;
    badge_2_hover_icon: Schema.Attribute.String;
    badge_2_icon: Schema.Attribute.String;
    badge_2_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    badge_2_position: Schema.Attribute.Enumeration<
      [
        'topLeft',
        'topCenter',
        'topRight',
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
      ]
    > &
      Schema.Attribute.DefaultTo<'bottomRight'>;
    badge_2_width: Schema.Attribute.Integer;
    border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    border_width: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    enable_badge_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_badge_2: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_lock_badge: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_progress_bar: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_secondary_image: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_tag: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_title_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_title_2: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_title_3: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    image_aspect_ratio: Schema.Attribute.Enumeration<
      [
        'aspectRatio_1:1',
        'aspectRatio_2:1',
        'aspectRatio_2:3',
        'aspectRatio_3:4',
        'aspectRatio_4:3',
        'aspectRatio_5:3',
        'aspectRatio_5:6',
        'aspectRatio_9:13',
        'aspectRatio_9:16',
        'aspectRatio_12:4',
        'aspectRatio_16:1',
        'aspectRatio_16:2',
        'aspectRatio_16:4',
        'aspectRatio_16:5',
        'aspectRatio_16:6',
        'aspectRatio_16:7',
        'aspectRatio_16:9',
        'aspectRatio_19:5',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'aspectRatio_16:9'>;
    image_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    image_object_fit: Schema.Attribute.Enumeration<
      ['contain', 'cover', 'fill', 'none', 'scaleDown']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'cover'>;
    image_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    image_placeholder_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    image_source_key: Schema.Attribute.String & Schema.Attribute.Required;
    lock_badge_height: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<30>;
    lock_badge_lock_icon_url: Schema.Attribute.String;
    lock_badge_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    lock_badge_position: Schema.Attribute.Enumeration<
      [
        'topLeft',
        'topCenter',
        'topRight',
        'bottomRight',
        'bottomCenter',
        'bottomLeft',
      ]
    >;
    lock_badge_source_key: Schema.Attribute.String;
    lock_badge_unlock_icon_url: Schema.Attribute.String;
    lock_badge_width: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<30>;
    margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    progress_bar_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    progress_bar_corner_radius: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<4>;
    progress_bar_height: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<4>;
    progress_bar_hide_unwatched: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    progress_bar_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    progress_bar_position: Schema.Attribute.Enumeration<['top', 'bottom']> &
      Schema.Attribute.DefaultTo<'bottom'>;
    progress_bar_total_bar_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    progress_bar_total_bar_corner_radius: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<4>;
    secondary_image_aspect_ratio: Schema.Attribute.Enumeration<
      [
        'aspectRatio_1:1',
        'aspectRatio_2:1',
        'aspectRatio_2:3',
        'aspectRatio_3:4',
        'aspectRatio_4:3',
        'aspectRatio_5:3',
        'aspectRatio_9:13',
        'aspectRatio_9:16',
        'aspectRatio_12:4',
        'aspectRatio_16:1',
        'aspectRatio_16:2',
        'aspectRatio_16:4',
        'aspectRatio_16:6',
        'aspectRatio_16:7',
        'aspectRatio_16:9',
      ]
    >;
    secondary_image_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    secondary_image_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    secondary_image_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    secondary_image_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    secondary_image_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    secondary_image_object_fit: Schema.Attribute.Enumeration<
      ['contain', 'cover', 'fill', 'none', 'scale-down']
    > &
      Schema.Attribute.DefaultTo<'cover'>;
    secondary_image_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    secondary_image_position: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.DefaultTo<'right'>;
    secondary_image_source_key: Schema.Attribute.String;
    tag_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    tag_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    tag_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    tag_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    tag_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    tag_border_width: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    tag_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    tag_font_size: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<10>;
    tag_font_spacing: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    tag_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.DefaultTo<'regular'>;
    tag_height: Schema.Attribute.Integer;
    tag_hover_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    tag_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    tag_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    tag_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    tag_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    tag_hover_text_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    tag_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    tag_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    tag_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    tag_position: Schema.Attribute.Enumeration<
      [
        'topLeft',
        'topCenter',
        'topRight',
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
      ]
    > &
      Schema.Attribute.DefaultTo<'bottomRight'>;
    tag_source_key: Schema.Attribute.String;
    tag_text_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    tag_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    tag_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    title_1_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    title_1_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_1_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_1_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    title_1_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    title_1_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    title_1_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_1_custom_text: Schema.Attribute.String;
    title_1_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    title_1_font_size: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<10>;
    title_1_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    title_1_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.DefaultTo<'regular'>;
    title_1_height: Schema.Attribute.Integer;
    title_1_hover_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_1_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_1_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    title_1_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    title_1_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    title_1_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_1_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_1_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_1_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_1_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_1_source_key: Schema.Attribute.String;
    title_1_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_1_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    title_1_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    title_2_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    title_2_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_2_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_2_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    title_2_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    title_2_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    title_2_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_2_custom_text: Schema.Attribute.String;
    title_2_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    title_2_font_size: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<10>;
    title_2_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    title_2_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.DefaultTo<'regular'>;
    title_2_height: Schema.Attribute.Integer;
    title_2_hover_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_2_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_2_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    title_2_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    title_2_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    title_2_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_2_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_2_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_2_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_2_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_2_source_key: Schema.Attribute.String;
    title_2_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_2_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    title_2_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    title_3_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    title_3_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_3_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_3_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    title_3_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    title_3_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    title_3_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_3_custom_text: Schema.Attribute.String;
    title_3_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    title_3_font_size: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<10>;
    title_3_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    title_3_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.DefaultTo<'regular'>;
    title_3_height: Schema.Attribute.Integer;
    title_3_hover_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_3_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_3_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    title_3_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    title_3_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    title_3_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_3_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_3_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_3_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_3_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_3_source_key: Schema.Attribute.String;
    title_3_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_3_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    title_3_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface WebColor extends Struct.ComponentSchema {
  collectionName: 'components_web_colors';
  info: {
    displayName: 'Color';
  };
  attributes: {
    hex: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    opacity: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<100>;
  };
}

export interface WebCorner extends Struct.ComponentSchema {
  collectionName: 'components_web_corners';
  info: {
    displayName: 'Corner';
  };
  attributes: {
    bottomLeft: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    bottomRight: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    topLeft: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    topRight: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface WebDivider extends Struct.ComponentSchema {
  collectionName: 'components_web_dividers';
  info: {
    displayName: 'Divider';
  };
  attributes: {
    color: Schema.Attribute.Component<'web.color', false> &
      Schema.Attribute.Required;
    direction: Schema.Attribute.Enumeration<['vertical', 'horizontal']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'vertical'>;
    margin: Schema.Attribute.Component<'web.spacing', false>;
    width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<4>;
  };
}

export interface WebDynamicFilterList extends Struct.ComponentSchema {
  collectionName: 'components_web_dynamic_filter_lists_flat';
  info: {
    displayName: 'Filter Tabs';
  };
  attributes: {
    button_background_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    button_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    button_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    button_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    button_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    button_content_alignment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    button_display_mode: Schema.Attribute.Enumeration<['Fix', 'Dynamic']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Dynamic'>;
    button_height: Schema.Attribute.Integer & Schema.Attribute.Required;
    button_hover_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    button_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    button_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    button_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    button_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    button_label_font_height: Schema.Attribute.Integer;
    button_label_font_size: Schema.Attribute.Integer;
    button_label_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    button_label_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    >;
    button_label_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    button_label_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    button_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    button_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    button_selected_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    button_selected_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    button_selected_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    button_selected_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    button_selected_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    button_width: Schema.Attribute.Integer;
    gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<10>;
    margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
  };
}

export interface WebEpg extends Struct.ComponentSchema {
  collectionName: 'components_web_epgs';
  info: {
    displayName: 'EPG';
  };
  attributes: {
    channels: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    programs: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
  };
}

export interface WebFavoriteButton extends Struct.ComponentSchema {
  collectionName: 'components_web_favorite_buttons';
  info: {
    displayName: 'Favorite Button';
    icon: 'heart';
  };
  attributes: {
    selectedFavoriteButton: Schema.Attribute.Component<
      'web.action-button',
      false
    > &
      Schema.Attribute.Required;
    unSelectedFavoriteButton: Schema.Attribute.Component<
      'web.action-button',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface WebFeed extends Struct.ComponentSchema {
  collectionName: 'components_web_feeds';
  info: {
    displayName: 'Feed';
  };
  attributes: {
    enable_url_mapping: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    feed_url: Schema.Attribute.String & Schema.Attribute.Required;
    url_mapping: Schema.Attribute.JSON;
  };
}

export interface WebGrid extends Struct.ComponentSchema {
  collectionName: 'components_web_grids';
  info: {
    displayName: 'Grid';
  };
  attributes: {
    card_type: Schema.Attribute.Relation<
      'oneToOne',
      'api::web-card-type.web-card-type'
    >;
    column_count: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<5>;
    column_gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<10>;
    enable_title: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    row_gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<10>;
    title_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    title_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_custom_text: Schema.Attribute.String;
    title_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    title_font_size: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<10>;
    title_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    title_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.DefaultTo<'regular'>;
    title_height: Schema.Attribute.Integer;
    title_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_source_key: Schema.Attribute.String;
    title_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    title_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface WebHeroCard extends Struct.ComponentSchema {
  collectionName: 'components_web_hero_cards';
  info: {
    displayName: 'Hero Card';
  };
  attributes: {
    background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    background_image_aspect_ratio: Schema.Attribute.Enumeration<
      [
        'aspectRatio_1:1',
        'aspectRatio_2:1',
        'aspectRatio_2:3',
        'aspectRatio_3:4',
        'aspectRatio_4:3',
        'aspectRatio_5:3',
        'aspectRatio_5:6',
        'aspectRatio_9:13',
        'aspectRatio_9:16',
        'aspectRatio_12:4',
        'aspectRatio_16:1',
        'aspectRatio_16:2',
        'aspectRatio_16:4',
        'aspectRatio_16:5',
        'aspectRatio_16:6',
        'aspectRatio_16:7',
        'aspectRatio_16:9',
        'aspectRatio_19:5',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'aspectRatio_16:9'>;
    background_image_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    background_image_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    background_image_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    background_image_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    background_image_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    background_image_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    background_image_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    background_image_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    background_image_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    background_image_object_fit: Schema.Attribute.Enumeration<
      ['contain', 'cover', 'fill', 'none', 'scaleDown']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'cover'>;
    background_image_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    background_image_placeholder_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    background_image_source_key: Schema.Attribute.String &
      Schema.Attribute.Required;
    buttons_group_enable_max_width: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    buttons_group_horizontal_gap: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<8>;
    buttons_group_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    buttons_group_max_width: Schema.Attribute.Integer;
    buttons_group_stacking: Schema.Attribute.Enumeration<
      ['horizontal', 'vertical']
    > &
      Schema.Attribute.DefaultTo<'horizontal'>;
    buttons_group_vertical_gap: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<8>;
    buttons_position: Schema.Attribute.Enumeration<
      ['aboveLabel1', 'aboveLabel2', 'aboveLabel3', 'belowLabel3']
    > &
      Schema.Attribute.DefaultTo<'belowLabel3'>;
    content_max_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<60>;
    content_position: Schema.Attribute.Enumeration<
      [
        'top_left',
        'top_center',
        'top_right',
        'center_left',
        'center',
        'center_right',
        'bottom_left',
        'bottom_center',
        'bottom_right',
        'none',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'center_left'>;
    enable_buttons: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_label_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_label_2: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_label_3: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_play_button: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_secondary_image: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_share_button: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_trailer_button: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label_1_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    label_1_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_1_custom_text: Schema.Attribute.String;
    label_1_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    label_1_font_size: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<10>;
    label_1_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    label_1_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.DefaultTo<'normal'>;
    label_1_height: Schema.Attribute.Integer;
    label_1_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_1_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    label_1_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    label_1_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    label_1_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    label_1_source_key: Schema.Attribute.String;
    label_1_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    label_1_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    label_1_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    label_2_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    label_2_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_2_custom_text: Schema.Attribute.String;
    label_2_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    label_2_font_size: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<10>;
    label_2_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    label_2_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.DefaultTo<'normal'>;
    label_2_height: Schema.Attribute.Integer;
    label_2_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_2_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    label_2_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    label_2_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    label_2_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    label_2_source_key: Schema.Attribute.String;
    label_2_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    label_2_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    label_2_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    label_3_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    label_3_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_3_custom_text: Schema.Attribute.String;
    label_3_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    label_3_font_size: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<10>;
    label_3_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    label_3_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.DefaultTo<'normal'>;
    label_3_height: Schema.Attribute.Integer;
    label_3_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_3_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    label_3_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    label_3_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    label_3_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    label_3_source_key: Schema.Attribute.String;
    label_3_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    label_3_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    label_3_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    max_height: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    overlay_gradient: Schema.Attribute.String;
    padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    play_button_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    play_button_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    play_button_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    play_button_content_alignment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.DefaultTo<'left'>;
    play_button_display_mode: Schema.Attribute.Enumeration<['Fix', 'Dynamic']> &
      Schema.Attribute.DefaultTo<'Dynamic'>;
    play_button_enable_icon: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    play_button_enable_label: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    play_button_height: Schema.Attribute.Integer;
    play_button_hover_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    play_button_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    play_button_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    play_button_icon_height: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<25>;
    play_button_icon_hover_icon_url: Schema.Attribute.String;
    play_button_icon_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    play_button_icon_position: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.DefaultTo<'right'>;
    play_button_icon_url: Schema.Attribute.String;
    play_button_icon_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<25>;
    play_button_label_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_label_custom_label: Schema.Attribute.String;
    play_button_label_enable_custom_label: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    play_button_label_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    play_button_label_font_height: Schema.Attribute.Integer;
    play_button_label_font_size: Schema.Attribute.Integer;
    play_button_label_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    play_button_label_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    >;
    play_button_label_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_label_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    play_button_label_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    play_button_label_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    play_button_label_selected_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_label_source_key: Schema.Attribute.String;
    play_button_label_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    play_button_label_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    play_button_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    play_button_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    play_button_selected_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_selected_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_selected_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    play_button_selected_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    play_button_selected_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    play_button_width: Schema.Attribute.Integer;
    secondary_image_height: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<50>;
    secondary_image_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    secondary_image_object_fit: Schema.Attribute.Enumeration<
      ['contain', 'cover', 'fill', 'none', 'scaleDown']
    > &
      Schema.Attribute.DefaultTo<'cover'>;
    secondary_image_position: Schema.Attribute.Enumeration<
      [
        'aboveLabel1',
        'aboveLabel2',
        'aboveLabel3',
        'belowLabel3',
        'aboveButtons',
        'belowButtons',
      ]
    > &
      Schema.Attribute.DefaultTo<'aboveLabel1'>;
    secondary_image_source_key: Schema.Attribute.String;
    secondary_image_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<100>;
    share_button_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    share_button_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    share_button_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    share_button_content_alignment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.DefaultTo<'left'>;
    share_button_display_mode: Schema.Attribute.Enumeration<
      ['Fix', 'Dynamic']
    > &
      Schema.Attribute.DefaultTo<'Dynamic'>;
    share_button_enable_icon: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    share_button_enable_label: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    share_button_height: Schema.Attribute.Integer;
    share_button_hover_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    share_button_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    share_button_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    share_button_icon_height: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<25>;
    share_button_icon_hover_icon_url: Schema.Attribute.String;
    share_button_icon_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    share_button_icon_position: Schema.Attribute.Enumeration<
      ['right', 'left']
    > &
      Schema.Attribute.DefaultTo<'right'>;
    share_button_icon_url: Schema.Attribute.String;
    share_button_icon_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<25>;
    share_button_label_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_label_custom_label: Schema.Attribute.String;
    share_button_label_enable_custom_label: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    share_button_label_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    share_button_label_font_height: Schema.Attribute.Integer;
    share_button_label_font_size: Schema.Attribute.Integer;
    share_button_label_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    share_button_label_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    >;
    share_button_label_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_label_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    share_button_label_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    share_button_label_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    share_button_label_selected_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_label_source_key: Schema.Attribute.String;
    share_button_label_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    share_button_label_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    share_button_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    share_button_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    share_button_selected_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_selected_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_selected_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    share_button_selected_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    share_button_selected_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    share_button_width: Schema.Attribute.Integer;
    trailer_button_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    trailer_button_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    trailer_button_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    trailer_button_content_alignment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.DefaultTo<'left'>;
    trailer_button_display_mode: Schema.Attribute.Enumeration<
      ['Fix', 'Dynamic']
    > &
      Schema.Attribute.DefaultTo<'Dynamic'>;
    trailer_button_enable_icon: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    trailer_button_enable_label: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    trailer_button_height: Schema.Attribute.Integer;
    trailer_button_hover_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    trailer_button_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    trailer_button_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    trailer_button_icon_height: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<25>;
    trailer_button_icon_hover_icon_url: Schema.Attribute.String;
    trailer_button_icon_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    trailer_button_icon_position: Schema.Attribute.Enumeration<
      ['right', 'left']
    > &
      Schema.Attribute.DefaultTo<'right'>;
    trailer_button_icon_url: Schema.Attribute.String;
    trailer_button_icon_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<25>;
    trailer_button_label_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_label_custom_label: Schema.Attribute.String;
    trailer_button_label_enable_custom_label: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    trailer_button_label_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    trailer_button_label_font_height: Schema.Attribute.Integer;
    trailer_button_label_font_size: Schema.Attribute.Integer;
    trailer_button_label_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    trailer_button_label_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    >;
    trailer_button_label_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_label_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    trailer_button_label_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    trailer_button_label_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    trailer_button_label_selected_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_label_source_key: Schema.Attribute.String;
    trailer_button_label_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    trailer_button_label_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    trailer_button_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    trailer_button_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    trailer_button_selected_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_selected_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_selected_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    trailer_button_selected_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.DefaultTo<'none '>;
    trailer_button_selected_border_width: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    trailer_button_width: Schema.Attribute.Integer;
  };
}

export interface WebHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_web_hero_sections_v2';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    background_image_aspect_ratio: Schema.Attribute.Enumeration<
      [
        'aspectRatio_16:9',
        'aspectRatio_16:4',
        'aspectRatio_16:6',
        'aspectRatio_16:2',
        'aspectRatio_1:1',
        'aspectRatio_2:3',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'aspectRatio_16:9'>;
    background_image_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    background_image_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    background_image_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    background_image_border_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    background_image_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    background_image_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    background_image_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    background_image_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    background_image_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    background_image_object_fit: Schema.Attribute.Enumeration<
      ['contain', 'cover', 'fill', 'none', 'scaleDown']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'cover'>;
    background_image_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    background_image_placeholder_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    background_image_source_key: Schema.Attribute.String &
      Schema.Attribute.Required;
    buttons_group_enable_max_width: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    buttons_group_horizontal_gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<8>;
    buttons_group_margin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    buttons_group_max_width: Schema.Attribute.Integer;
    buttons_group_stacking: Schema.Attribute.Enumeration<
      ['horizontal', 'vertical']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'horizontal'>;
    buttons_group_vertical_gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<8>;
    buttons_position: Schema.Attribute.Enumeration<
      ['aboveLabel1', 'aboveLabel2', 'aboveLabel3', 'belowLabel3']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'belowLabel3'>;
    content_max_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<60>;
    enable_buttons: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_favorites_button: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_label_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_label_2: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_label_3: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_play_button: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_secondary_image: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_share_button: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_trailer_button: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label_1_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    label_1_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_1_custom_text: Schema.Attribute.String;
    label_1_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'serif'>;
    label_1_font_size: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<10>;
    label_1_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    label_1_font_weight: Schema.Attribute.Enumeration<
      ['normal', 'bold', 'bolder', 'lighter']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'normal'>;
    label_1_height: Schema.Attribute.Integer;
    label_1_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_1_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    label_1_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    label_1_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    label_1_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    label_1_source_key: Schema.Attribute.String;
    label_1_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    label_1_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    label_1_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label_2_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    label_2_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_2_custom_text: Schema.Attribute.String;
    label_2_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'serif'>;
    label_2_font_size: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<10>;
    label_2_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    label_2_font_weight: Schema.Attribute.Enumeration<
      ['normal', 'bold', 'bolder', 'lighter']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'normal'>;
    label_2_height: Schema.Attribute.Integer;
    label_2_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_2_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    label_2_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    label_2_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    label_2_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    label_2_source_key: Schema.Attribute.String;
    label_2_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    label_2_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    label_2_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label_3_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    label_3_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_3_custom_text: Schema.Attribute.String;
    label_3_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'serif'>;
    label_3_font_size: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<10>;
    label_3_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    label_3_font_weight: Schema.Attribute.Enumeration<
      ['normal', 'bold', 'bolder', 'lighter']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'normal'>;
    label_3_height: Schema.Attribute.Integer;
    label_3_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_3_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    label_3_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    label_3_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    label_3_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    label_3_source_key: Schema.Attribute.String;
    label_3_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    label_3_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    label_3_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    max_height: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    overlay_gradient: Schema.Attribute.String;
    padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    play_button_background_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    play_button_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    play_button_border_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    play_button_content_alignment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    play_button_display_mode: Schema.Attribute.Enumeration<['Fix', 'Dynamic']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Dynamic'>;
    play_button_enable_icon: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    play_button_enable_label: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    play_button_height: Schema.Attribute.Integer & Schema.Attribute.Required;
    play_button_hover_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    play_button_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    play_button_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    play_button_icon_height: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<25>;
    play_button_icon_hover_icon_url: Schema.Attribute.String;
    play_button_icon_icon_url: Schema.Attribute.String &
      Schema.Attribute.Required;
    play_button_icon_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    play_button_icon_position: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.DefaultTo<'right'>;
    play_button_icon_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<25>;
    play_button_label_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_label_custom_label: Schema.Attribute.String;
    play_button_label_enable_custom_label: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    play_button_label_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'serif'>;
    play_button_label_font_height: Schema.Attribute.Integer &
      Schema.Attribute.Required;
    play_button_label_font_size: Schema.Attribute.Integer &
      Schema.Attribute.Required;
    play_button_label_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    play_button_label_font_weight: Schema.Attribute.Enumeration<
      ['normal', 'bold', 'bolder', 'lighter']
    >;
    play_button_label_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_label_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    play_button_label_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    play_button_label_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    play_button_label_selected_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_label_source_key: Schema.Attribute.String;
    play_button_label_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    play_button_label_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    play_button_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    play_button_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    play_button_selected_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_selected_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    play_button_selected_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    play_button_selected_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    play_button_selected_border_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    play_button_width: Schema.Attribute.Integer;
    secondary_image_height: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<50>;
    secondary_image_margin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    secondary_image_object_fit: Schema.Attribute.Enumeration<
      ['contain', 'cover', 'fill', 'none', 'scaleDown']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'cover'>;
    secondary_image_position: Schema.Attribute.Enumeration<
      [
        'aboveLabel1',
        'aboveLabel2',
        'aboveLabel3',
        'belowLabel3',
        'aboveButtons',
        'belowButtons',
      ]
    > &
      Schema.Attribute.DefaultTo<'aboveLabel1'>;
    secondary_image_source_key: Schema.Attribute.String &
      Schema.Attribute.Required;
    secondary_image_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<100>;
    share_button_background_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    share_button_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    share_button_border_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    share_button_content_alignment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    share_button_display_mode: Schema.Attribute.Enumeration<
      ['Fix', 'Dynamic']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Dynamic'>;
    share_button_enable_icon: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    share_button_enable_label: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    share_button_height: Schema.Attribute.Integer & Schema.Attribute.Required;
    share_button_hover_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    share_button_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    share_button_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    share_button_icon_height: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<25>;
    share_button_icon_hover_icon_url: Schema.Attribute.String;
    share_button_icon_icon_url: Schema.Attribute.String &
      Schema.Attribute.Required;
    share_button_icon_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    share_button_icon_position: Schema.Attribute.Enumeration<
      ['right', 'left']
    > &
      Schema.Attribute.DefaultTo<'right'>;
    share_button_icon_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<25>;
    share_button_label_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_label_custom_label: Schema.Attribute.String;
    share_button_label_enable_custom_label: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    share_button_label_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'serif'>;
    share_button_label_font_height: Schema.Attribute.Integer &
      Schema.Attribute.Required;
    share_button_label_font_size: Schema.Attribute.Integer &
      Schema.Attribute.Required;
    share_button_label_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    share_button_label_font_weight: Schema.Attribute.Enumeration<
      ['normal', 'bold', 'bolder', 'lighter']
    >;
    share_button_label_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_label_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    share_button_label_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    share_button_label_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    share_button_label_selected_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_label_source_key: Schema.Attribute.String;
    share_button_label_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    share_button_label_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    share_button_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    share_button_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    share_button_selected_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_selected_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    share_button_selected_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    share_button_selected_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    share_button_selected_border_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    share_button_width: Schema.Attribute.Integer;
    trailer_button_background_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    trailer_button_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    trailer_button_border_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    trailer_button_content_alignment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    trailer_button_display_mode: Schema.Attribute.Enumeration<
      ['Fix', 'Dynamic']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Dynamic'>;
    trailer_button_enable_icon: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    trailer_button_enable_label: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    trailer_button_height: Schema.Attribute.Integer & Schema.Attribute.Required;
    trailer_button_hover_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_hover_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_hover_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    trailer_button_hover_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    trailer_button_hover_border_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    trailer_button_icon_height: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<25>;
    trailer_button_icon_hover_icon_url: Schema.Attribute.String;
    trailer_button_icon_icon_url: Schema.Attribute.String &
      Schema.Attribute.Required;
    trailer_button_icon_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    trailer_button_icon_position: Schema.Attribute.Enumeration<
      ['right', 'left']
    > &
      Schema.Attribute.DefaultTo<'right'>;
    trailer_button_icon_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<25>;
    trailer_button_label_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_label_custom_label: Schema.Attribute.String;
    trailer_button_label_enable_custom_label: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    trailer_button_label_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'serif'>;
    trailer_button_label_font_height: Schema.Attribute.Integer &
      Schema.Attribute.Required;
    trailer_button_label_font_size: Schema.Attribute.Integer &
      Schema.Attribute.Required;
    trailer_button_label_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    trailer_button_label_font_weight: Schema.Attribute.Enumeration<
      ['normal', 'bold', 'bolder', 'lighter']
    >;
    trailer_button_label_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_label_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    trailer_button_label_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    trailer_button_label_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    trailer_button_label_selected_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_label_source_key: Schema.Attribute.String;
    trailer_button_label_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    trailer_button_label_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    trailer_button_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    trailer_button_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    trailer_button_selected_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_selected_border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    trailer_button_selected_border_corner_radius: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.corner_field'>;
    trailer_button_selected_border_style: Schema.Attribute.Enumeration<
      [
        'none ',
        'dotted',
        'dashed',
        'solid',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none '>;
    trailer_button_selected_border_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    trailer_button_width: Schema.Attribute.Integer;
  };
}

export interface WebHorizontalList extends Struct.ComponentSchema {
  collectionName: 'components_web_horizontal_lists';
  info: {
    displayName: 'Horizontal List';
  };
  attributes: {
    auto_slide_number_of_tiles: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    auto_slide_seconds: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    card_type: Schema.Attribute.Relation<
      'oneToOne',
      'api::web-card-type.web-card-type'
    >;
    enable_auto_slide: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_navigation_icons: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_pagination_dots: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_title: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<10>;
    left_icon_height: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<25>;
    left_icon_hover_icon_url: Schema.Attribute.String;
    left_icon_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    left_icon_url: Schema.Attribute.String;
    left_icon_width: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<25>;
    loop: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    number_of_tiles: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<4>;
    padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    pagination_dots_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    pagination_dots_gap: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<5>;
    pagination_dots_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    pagination_dots_position: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.DefaultTo<'center'>;
    pagination_dots_selected_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    pagination_dots_size: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<10>;
    peek_offset: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<20>;
    peek_overlay: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    right_icon_height: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<25>;
    right_icon_hover_icon_url: Schema.Attribute.String;
    right_icon_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    right_icon_url: Schema.Attribute.String;
    right_icon_width: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<25>;
    title_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    title_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_custom_text: Schema.Attribute.String;
    title_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    title_font_size: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<10>;
    title_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    title_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.DefaultTo<'regular'>;
    title_height: Schema.Attribute.Integer;
    title_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_source_key: Schema.Attribute.String;
    title_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    title_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface WebIcon extends Struct.ComponentSchema {
  collectionName: 'components_web_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    height: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<25>;
    hoverIconUrl: Schema.Attribute.String;
    iconUrl: Schema.Attribute.String & Schema.Attribute.Required;
    margin: Schema.Attribute.Component<'web.spacing', false>;
    width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<25>;
  };
}

export interface WebImage extends Struct.ComponentSchema {
  collectionName: 'components_web_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    aspectRatio: Schema.Attribute.Enumeration<
      [
        'aspectRatio_16:9',
        'aspectRatio_16:6',
        'aspectRatio_16:2',
        'aspectRatio_1:1',
        'aspectRatio_2:3',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'aspectRatio_16:9'>;
    border: Schema.Attribute.Component<'web.border', false>;
    hoverBorder: Schema.Attribute.Component<'web.border', false>;
    margin: Schema.Attribute.Component<'web.spacing', false>;
    objectFit: Schema.Attribute.Enumeration<
      ['contain', 'cover', 'fill', 'none', 'scaleDown']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'cover'>;
    padding: Schema.Attribute.Component<'web.spacing', false>;
    placeholderColor: Schema.Attribute.Component<'web.color', false>;
    sourceKey: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WebInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_web_info_cards';
  info: {
    displayName: 'Info Card';
  };
  attributes: {
    enable_title_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    enable_title_2: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_title_3: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    margin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    padding: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_1_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    title_1_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_1_custom_text: Schema.Attribute.String;
    title_1_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    title_1_font_size: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<10>;
    title_1_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    title_1_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.DefaultTo<'regular'>;
    title_1_height: Schema.Attribute.Integer;
    title_1_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_1_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_1_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_1_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_1_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_1_source_key: Schema.Attribute.String;
    title_1_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_1_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    title_1_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    title_2_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    title_2_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_2_custom_text: Schema.Attribute.String;
    title_2_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    title_2_font_size: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<10>;
    title_2_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    title_2_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.DefaultTo<'regular'>;
    title_2_height: Schema.Attribute.Integer;
    title_2_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_2_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_2_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_2_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_2_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_2_source_key: Schema.Attribute.String;
    title_2_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_2_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    title_2_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    title_3_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.DefaultTo<'left'>;
    title_3_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_3_custom_text: Schema.Attribute.String;
    title_3_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    title_3_font_size: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<10>;
    title_3_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<1>;
    title_3_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.DefaultTo<'regular'>;
    title_3_height: Schema.Attribute.Integer;
    title_3_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_3_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_3_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_3_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_3_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_3_source_key: Schema.Attribute.String;
    title_3_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_3_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    title_3_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface WebLockBadge extends Struct.ComponentSchema {
  collectionName: 'components_web_lock_badges';
  info: {
    displayName: 'Lock Badge';
  };
  attributes: {
    height: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<30>;
    lockIconUrl: Schema.Attribute.String & Schema.Attribute.Required;
    margin: Schema.Attribute.Component<'web.spacing', false>;
    position: Schema.Attribute.Enumeration<
      [
        'topLeft',
        'topCenter',
        'topRight',
        'bottomRight',
        'bottomCenter',
        'bottomLeft',
      ]
    >;
    sourceKey: Schema.Attribute.String & Schema.Attribute.Required;
    unlockIconUrl: Schema.Attribute.String;
    width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<30>;
  };
}

export interface WebLogoImage extends Struct.ComponentSchema {
  collectionName: 'components_web_logo_images';
  info: {
    displayName: 'Logo Image';
  };
  attributes: {
    height: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<50>;
    margin: Schema.Attribute.Component<'web.spacing', false> &
      Schema.Attribute.Required;
    objectFit: Schema.Attribute.Enumeration<
      ['contain', 'cover', 'fill', 'none', 'scaleDown']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'cover'>;
    sourceKey: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<100>;
  };
}

export interface WebMetadata extends Struct.ComponentSchema {
  collectionName: 'components_web_metadata';
  info: {
    displayName: 'Metadata';
  };
  attributes: {
    labelStyle: Schema.Attribute.Component<'web.text', false> &
      Schema.Attribute.Required;
    valueStyle: Schema.Attribute.Component<'web.text', false> &
      Schema.Attribute.Required;
  };
}

export interface WebPaginationDots extends Struct.ComponentSchema {
  collectionName: 'components_web_pagination_dots';
  info: {
    displayName: 'Pagination Dots';
  };
  attributes: {
    color: Schema.Attribute.Component<'web.color', false> &
      Schema.Attribute.Required;
    gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<5>;
    margin: Schema.Attribute.Component<'web.spacing', false>;
    position: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'center'>;
    selectedColor: Schema.Attribute.Component<'web.color', false> &
      Schema.Attribute.Required;
    size: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<10>;
  };
}

export interface WebPlayer extends Struct.ComponentSchema {
  collectionName: 'components_web_players';
  info: {
    displayName: 'Player';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    source_key: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WebPlaylistDetails extends Struct.ComponentSchema {
  collectionName: 'components_web_playlist_details_flat';
  info: {
    displayName: 'Playlist Details';
  };
  attributes: {
    enable_title_1: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    enable_title_2: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    enable_title_3: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    margin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_1_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    title_1_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_1_custom_text: Schema.Attribute.String;
    title_1_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'serif'>;
    title_1_font_size: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<10>;
    title_1_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    title_1_font_weight: Schema.Attribute.Enumeration<
      ['normal', 'bold', 'bolder', 'lighter']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'normal'>;
    title_1_height: Schema.Attribute.Integer;
    title_1_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_1_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_1_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_1_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_1_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_1_source_key: Schema.Attribute.String;
    title_1_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_1_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    title_1_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title_2_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    title_2_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_2_custom_text: Schema.Attribute.String;
    title_2_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'serif'>;
    title_2_font_size: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<10>;
    title_2_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    title_2_font_weight: Schema.Attribute.Enumeration<
      ['normal', 'bold', 'bolder', 'lighter']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'normal'>;
    title_2_height: Schema.Attribute.Integer;
    title_2_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_2_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_2_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_2_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_2_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_2_source_key: Schema.Attribute.String;
    title_2_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_2_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    title_2_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title_3_align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    title_3_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_3_custom_text: Schema.Attribute.String;
    title_3_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'serif'>;
    title_3_font_size: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<10>;
    title_3_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    title_3_font_weight: Schema.Attribute.Enumeration<
      ['normal', 'bold', 'bolder', 'lighter']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'normal'>;
    title_3_height: Schema.Attribute.Integer;
    title_3_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    title_3_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_3_lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    title_3_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_3_padding: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    title_3_source_key: Schema.Attribute.String;
    title_3_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    title_3_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    title_3_use_custom_text: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface WebPreviewPlayback extends Struct.ComponentSchema {
  collectionName: 'components_web_preview_playbacks';
  info: {
    displayName: 'Preview Playback';
  };
  attributes: {
    defaultAudioMode: Schema.Attribute.Enumeration<['mute', 'unMute']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'mute'>;
    delay: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'5000'>;
    endTimeSourceKey: Schema.Attribute.String;
    loopCount: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    sourceKey: Schema.Attribute.String & Schema.Attribute.Required;
    startTimeSourceKey: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WebProgressBar extends Struct.ComponentSchema {
  collectionName: 'components_web_progress_bars';
  info: {
    displayName: 'Progress Bar';
  };
  attributes: {
    cornerRadius: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<4>;
    height: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<4>;
    hideUnwatched: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    margin: Schema.Attribute.Component<'web.spacing', false>;
    position: Schema.Attribute.Enumeration<['top', 'bottom']> &
      Schema.Attribute.DefaultTo<'bottom'>;
    progressBarColor: Schema.Attribute.Component<'web.color', false>;
    totalBarColor: Schema.Attribute.Component<'web.color', false>;
    totalBarCornerRadius: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<4>;
  };
}

export interface WebResponsiveButtonLabel extends Struct.ComponentSchema {
  collectionName: 'components_web_responsive_button_labels';
  info: {
    displayName: 'Responsive Button Label';
  };
  attributes: {
    desktop: Schema.Attribute.Component<'web.button-label', false>;
    largeDesktop: Schema.Attribute.Component<'web.button-label', false>;
    mobile: Schema.Attribute.Component<'web.button-label', false>;
    tablet: Schema.Attribute.Component<'web.button-label', false>;
  };
}

export interface WebResponsiveFiltersListOrGrid extends Struct.ComponentSchema {
  collectionName: 'components_web_responsive_filters_list_or_grids';
  info: {
    displayName: 'Responsive Filters List or Grid';
  };
  attributes: {
    feed: Schema.Attribute.Component<'web.feed', false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WebResponsiveFiltersTabs extends Struct.ComponentSchema {
  collectionName: 'components_web_responsive_filters_tabs';
  info: {
    displayName: 'Responsive Filters Tabs';
  };
  attributes: {
    button_label_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    button_label_custom_label: Schema.Attribute.String;
    button_label_enable_custom_label: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    button_label_font_family: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    button_label_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    button_label_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    button_label_selected_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    button_label_source_key: Schema.Attribute.String;
    button_label_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    button_label_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    desktop: Schema.Attribute.Component<'web.dynamic-filter-list', false>;
    feed: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
    large_desktop: Schema.Attribute.Component<'web.dynamic-filter-list', false>;
    mobile: Schema.Attribute.Component<'web.dynamic-filter-list', false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    tablet: Schema.Attribute.Component<'web.dynamic-filter-list', false>;
  };
}

export interface WebResponsiveGrid extends Struct.ComponentSchema {
  collectionName: 'components_web_responsive_grids';
  info: {
    displayName: 'Responsive Grid';
  };
  attributes: {
    desktop: Schema.Attribute.Component<'web.grid', false>;
    feed: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
    large_desktop: Schema.Attribute.Component<'web.grid', false>;
    mobile: Schema.Attribute.Component<'web.grid', false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    tablet: Schema.Attribute.Component<'web.grid', false>;
  };
}

export interface WebResponsiveHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_web_responsive_hero_sections';
  info: {
    displayName: 'Responsive Hero Section';
  };
  attributes: {
    desktop: Schema.Attribute.Relation<
      'oneToOne',
      'api::web-card-type.web-card-type'
    >;
    feed: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
    large_desktop: Schema.Attribute.Relation<
      'oneToOne',
      'api::web-card-type.web-card-type'
    >;
    mobile: Schema.Attribute.Relation<
      'oneToOne',
      'api::web-card-type.web-card-type'
    >;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    play_feed: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
    tablet: Schema.Attribute.Relation<
      'oneToOne',
      'api::web-card-type.web-card-type'
    >;
    trailer_feed: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
  };
}

export interface WebResponsiveHorizontalList extends Struct.ComponentSchema {
  collectionName: 'components_web_responsive_horizontal_lists';
  info: {
    displayName: 'Responsive Horizontal List';
  };
  attributes: {
    desktop: Schema.Attribute.Component<'web.horizontal-list', false>;
    feed: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
    large_desktop: Schema.Attribute.Component<'web.horizontal-list', false>;
    mobile: Schema.Attribute.Component<'web.horizontal-list', false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    tablet: Schema.Attribute.Component<'web.horizontal-list', false>;
  };
}

export interface WebResponsiveMargin extends Struct.ComponentSchema {
  collectionName: 'components_web_responsive_margins';
  info: {
    displayName: 'Responsive Margin';
  };
  attributes: {
    desktop: Schema.Attribute.Component<'web.spacing', false>;
    largeDesktop: Schema.Attribute.Component<'web.spacing', false>;
    mobile: Schema.Attribute.Component<'web.spacing', false>;
    tablet: Schema.Attribute.Component<'web.spacing', false>;
  };
}

export interface WebResponsiveMaxWidthOverride extends Struct.ComponentSchema {
  collectionName: 'components_web_responsive_max_width_overrides';
  info: {
    displayName: 'Responsive Max Width Override';
  };
  attributes: {
    desktop: Schema.Attribute.Integer;
    largeDesktop: Schema.Attribute.Integer;
    mobile: Schema.Attribute.Integer;
    overrideDesktopMaxWidth: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    overrideLargeDesktopMaxWidth: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    overrideMobileMaxWidth: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    overrideTabletMaxWidth: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    tablet: Schema.Attribute.Integer;
  };
}

export interface WebResponsivePlaylistDetails extends Struct.ComponentSchema {
  collectionName: 'components_web_responsive_playlist_details';
  info: {
    displayName: 'Responsive Playlist Details';
  };
  attributes: {
    desktop: Schema.Attribute.Relation<
      'oneToOne',
      'api::web-card-type.web-card-type'
    >;
    feed: Schema.Attribute.Relation<'oneToOne', 'api::feed.feed'>;
    large_desktop: Schema.Attribute.Relation<
      'oneToOne',
      'api::web-card-type.web-card-type'
    >;
    mobile: Schema.Attribute.Relation<
      'oneToOne',
      'api::web-card-type.web-card-type'
    >;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    tablet: Schema.Attribute.Relation<
      'oneToOne',
      'api::web-card-type.web-card-type'
    >;
  };
}

export interface WebResponsiveTabItemLabel extends Struct.ComponentSchema {
  collectionName: 'components_web_responsive_tab_item_labels';
  info: {
    displayName: 'Responsive Tab Item Label';
  };
  attributes: {
    desktop: Schema.Attribute.Component<'web.tab-item-label', false>;
    largeDesktop: Schema.Attribute.Component<'web.tab-item-label', false>;
    mobile: Schema.Attribute.Component<'web.tab-item-label', false>;
    tablet: Schema.Attribute.Component<'web.tab-item-label', false>;
  };
}

export interface WebSpacing extends Struct.ComponentSchema {
  collectionName: 'components_web_spacings';
  info: {
    displayName: 'Spacing';
  };
  attributes: {
    bottom: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    left: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    right: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    top: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface WebTabItem extends Struct.ComponentSchema {
  collectionName: 'components_web_tab_items';
  info: {
    displayName: 'Tab Item';
  };
  attributes: {
    desktop: Schema.Attribute.Component<'web.tab-item-label', false>;
    label: Schema.Attribute.String;
    label_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_enable_custom_label: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    label_font_family: Schema.Attribute.Enumeration<
      [
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
        'serif',
        'sansSerif',
        'monospace',
      ]
    > &
      Schema.Attribute.DefaultTo<'serif'>;
    label_hover_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_hover_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    label_indicator_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_indicator_height: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    label_selected_background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_selected_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    label_selected_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    label_text_decoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    label_text_transform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    >;
    large_desktop: Schema.Attribute.Component<'web.tab-item-label', false>;
    mobile: Schema.Attribute.Component<'web.tab-item-label', false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    tab_content: Schema.Attribute.Relation<
      'oneToOne',
      'api::web-page.web-page'
    >;
    tablet: Schema.Attribute.Component<'web.tab-item-label', false>;
  };
}

export interface WebTabItemIndicator extends Struct.ComponentSchema {
  collectionName: 'components_web_tab_item_indicators';
  info: {
    displayName: 'Tab Item Indicator';
  };
  attributes: {
    color: Schema.Attribute.Component<'web.color', false> &
      Schema.Attribute.Required;
    width: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface WebTabItemLabel extends Struct.ComponentSchema {
  collectionName: 'components_web_tab_item_labels_flat';
  info: {
    displayName: 'Tab Item Label';
  };
  attributes: {
    label_font_height: Schema.Attribute.Integer & Schema.Attribute.Required;
    label_font_size: Schema.Attribute.Integer & Schema.Attribute.Required;
    label_font_spacing: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    label_font_weight: Schema.Attribute.Enumeration<
      [
        'thin',
        'extra-light',
        'light',
        'regular',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'regular'>;
    label_indicator_width: Schema.Attribute.Integer;
    label_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
  };
}

export interface WebTabs extends Struct.ComponentSchema {
  collectionName: 'components_web_tabs';
  info: {
    displayName: 'Tabs';
  };
  attributes: {
    background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.color_field'>;
    desktop_gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    desktop_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    large_desktop_gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    large_desktop_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    mobile_gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    mobile_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
    tab_items: Schema.Attribute.Component<'web.tab-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    tablet_gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    tablet_margin: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::ui.spacing_field'>;
  };
}

export interface WebText extends Struct.ComponentSchema {
  collectionName: 'components_web_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    color: Schema.Attribute.Component<'web.color', false>;
    customText: Schema.Attribute.String;
    fontFamily: Schema.Attribute.Enumeration<
      [
        'serif',
        'sansSerif',
        'monospace',
        'cursive',
        'fantasy',
        'inter',
        'montserrat',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'serif'>;
    fontSize: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<10>;
    fontSpacing: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    fontWeight: Schema.Attribute.Enumeration<
      ['normal', 'bold', 'bolder', 'lighter']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'normal'>;
    height: Schema.Attribute.Integer;
    hoverColor: Schema.Attribute.Component<'web.color', false>;
    hoverTextDecoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    lines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    margin: Schema.Attribute.Component<'web.spacing', false>;
    padding: Schema.Attribute.Component<'web.spacing', false>;
    sourceKey: Schema.Attribute.String;
    textDecoration: Schema.Attribute.Enumeration<
      ['none', 'underline', 'strikethrough']
    >;
    textTransform: Schema.Attribute.Enumeration<
      ['none', 'capitalize', 'uppercase', 'lowercase']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    useCustomText: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.feed-context': CommonFeedContext;
      'mobile.card-type-1': MobileCardType1;
      'mobile.card-type-2': MobileCardType2;
      'mobile.curation': MobileCuration;
      'mobile.grid': MobileGrid;
      'mobile.horizontal-list': MobileHorizontalList;
      'roku.action-icon': RokuActionIcon;
      'roku.action-icons-group': RokuActionIconsGroup;
      'roku.background-image': RokuBackgroundImage;
      'roku.badge': RokuBadge;
      'roku.border': RokuBorder;
      'roku.button': RokuButton;
      'roku.button-group': RokuButtonGroup;
      'roku.button-icon': RokuButtonIcon;
      'roku.button-type-1': RokuButtonType1;
      'roku.card-type1': RokuCardType1;
      'roku.card-type2': RokuCardType2;
      'roku.color': RokuColor;
      'roku.corner': RokuCorner;
      'roku.curation': RokuCuration;
      'roku.feed-context': RokuFeedContext;
      'roku.fixed-image': RokuFixedImage;
      'roku.grid': RokuGrid;
      'roku.hero-section': RokuHeroSection;
      'roku.horizontal-list': RokuHorizontalList;
      'roku.image': RokuImage;
      'roku.lock-badge': RokuLockBadge;
      'roku.login': RokuLogin;
      'roku.login-template-1': RokuLoginTemplate1;
      'roku.pagination-dots': RokuPaginationDots;
      'roku.preview-playback': RokuPreviewPlayback;
      'roku.progress-bar': RokuProgressBar;
      'roku.roku-player': RokuRokuPlayer;
      'roku.spacing': RokuSpacing;
      'roku.text': RokuText;
      'web.action-button': WebActionButton;
      'web.action-icon': WebActionIcon;
      'web.action-icons-group': WebActionIconsGroup;
      'web.auto-slide': WebAutoSlide;
      'web.background-image': WebBackgroundImage;
      'web.badge': WebBadge;
      'web.border': WebBorder;
      'web.button-group': WebButtonGroup;
      'web.button-label': WebButtonLabel;
      'web.card-type-2': WebCardType2;
      'web.card-type1': WebCardType1;
      'web.color': WebColor;
      'web.corner': WebCorner;
      'web.divider': WebDivider;
      'web.dynamic-filter-list': WebDynamicFilterList;
      'web.epg': WebEpg;
      'web.favorite-button': WebFavoriteButton;
      'web.feed': WebFeed;
      'web.grid': WebGrid;
      'web.hero-card': WebHeroCard;
      'web.hero-section': WebHeroSection;
      'web.horizontal-list': WebHorizontalList;
      'web.icon': WebIcon;
      'web.image': WebImage;
      'web.info-card': WebInfoCard;
      'web.lock-badge': WebLockBadge;
      'web.logo-image': WebLogoImage;
      'web.metadata': WebMetadata;
      'web.pagination-dots': WebPaginationDots;
      'web.player': WebPlayer;
      'web.playlist-details': WebPlaylistDetails;
      'web.preview-playback': WebPreviewPlayback;
      'web.progress-bar': WebProgressBar;
      'web.responsive-button-label': WebResponsiveButtonLabel;
      'web.responsive-filters-list-or-grid': WebResponsiveFiltersListOrGrid;
      'web.responsive-filters-tabs': WebResponsiveFiltersTabs;
      'web.responsive-grid': WebResponsiveGrid;
      'web.responsive-hero-section': WebResponsiveHeroSection;
      'web.responsive-horizontal-list': WebResponsiveHorizontalList;
      'web.responsive-margin': WebResponsiveMargin;
      'web.responsive-max-width-override': WebResponsiveMaxWidthOverride;
      'web.responsive-playlist-details': WebResponsivePlaylistDetails;
      'web.responsive-tab-item-label': WebResponsiveTabItemLabel;
      'web.spacing': WebSpacing;
      'web.tab-item': WebTabItem;
      'web.tab-item-indicator': WebTabItemIndicator;
      'web.tab-item-label': WebTabItemLabel;
      'web.tabs': WebTabs;
      'web.text': WebText;
    }
  }
}
