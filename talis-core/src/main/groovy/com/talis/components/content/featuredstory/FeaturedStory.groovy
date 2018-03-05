package com.talis.components.content.featuredstory

import com.citytechinc.cq.component.annotations.DialogField
import com.citytechinc.cq.component.annotations.widgets.TextField
import com.icfolson.aem.library.core.components.AbstractComponent
import com.talis.annotations.AEMComponent

import javax.inject.Inject

@AEMComponent("Featured Story")
class FeaturedStory extends AbstractComponent {

	@DialogField(
		fieldLabel = "Title")
	@TextField
  @Inject
  String title

	@DialogField(
		fieldLabel = "Sub Title")
	@TextField
  @Inject
  String subtitle

	@DialogField(
		fieldLabel = "Message")
	@TextField
  @Inject
  String message

	@DialogField(
		fieldLabel = "Call to Action Text")
	@TextField
  @Inject
  String ctaText
}
