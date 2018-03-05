package com.talis.components.content.featuredstory

import com.citytechinc.cq.component.annotations.DialogField
import com.citytechinc.cq.component.annotations.widgets.TextField
import com.icfolson.aem.library.core.components.AbstractComponent
import com.talis.annotations.AEMComponent

import javax.inject.Inject

@AEMComponent("Featured Story")
class FeaturedStory extends AbstractComponent {

	@DialogField(
		fieldLabel = "Test Title",
		fieldDescription = "This is the test title.")
	@TextField
  @Inject
  String title
}
