<template>
	<div class="category-page" v-if="config">
		<PageTitle title="Edit Configuration" :item-name="config.key"/>
		<ConfigurationForm :metadata="config.metadata" :submitting="submitting" @save="submit"/>
	</div>
</template>
<script>
  import { getCurrentInstance } from '@vue/composition-api'
  import { useSubmitting } from '../core/compositions/submitting'
  import { useEditConfiguration } from './compositions/configurations'
  import PageTitle from '../core/components/semantics/PageTitle'
  import ConfigurationForm from './components/ConfigurationForm'

  export default {
    name: 'EditConfiguration',
    components: { ConfigurationForm, PageTitle },
    setup () {
      const { $route } = getCurrentInstance()
      const { config, updateConfiguration } = useEditConfiguration($route.params.key)

      const { submitting, submit } = useSubmitting((metadata) => updateConfiguration({ metadata }))

      return {
        config,
        submit,
        submitting
      }
    }
  }
</script>
