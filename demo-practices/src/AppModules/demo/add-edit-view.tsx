import {
  AppTextField,
  AppAutoComplete,
  AppBoxLayout,
  AppGridLayout,
  AppButton,
  AppCard,
  AppDivider,
  AppRadioButton,
  AppTextArea,
  AppCheckBox,
} from "../../components/index";

import { boxStyle, inputFields, buttonsStyl } from "../../component-styles/index"

function DemoAddEditView(props: any) {
  const boxClasses = boxStyle()
  const inpuFileds = inputFields()
  const btnClasses = buttonsStyl()
  return (
    <AppCard>
      <AppGridLayout container spacing={3}>
        <AppGridLayout container item xs={6}>
          <AppBoxLayout>
            <AppTextField label="First Name" variant='outlined' ></AppTextField>
          </AppBoxLayout>
        </AppGridLayout>

        <AppGridLayout container item xs={6}>
          <AppBoxLayout>
            <AppTextField label="Last Name" variant='outlined'></AppTextField>
          </AppBoxLayout>
        </AppGridLayout>

        <AppGridLayout container item xs={6}>
          <AppBoxLayout>
            <AppTextField label="Age" variant='outlined'></AppTextField>
          </AppBoxLayout>
        </AppGridLayout>

        <AppGridLayout container item xs={6}>
          <AppGridLayout container item xs={3}>
            <AppBoxLayout>
              <AppRadioButton></AppRadioButton>
            </AppBoxLayout>
          </AppGridLayout>

          <AppGridLayout container item xs={3}>
            <AppBoxLayout>
              <AppRadioButton></AppRadioButton>
            </AppBoxLayout>
          </AppGridLayout>
        </AppGridLayout>

        <AppGridLayout container item xs={12}>
          <AppBoxLayout>
            <AppTextArea variant='outlined'></AppTextArea>
          </AppBoxLayout>
        </AppGridLayout>
        {/* <AppDivider /> */}
        {/* <AppDivider /> */}

        <AppGridLayout container item xs={12}>
          <AppBoxLayout>
            <AppAutoComplete id='combo-box-demo' variant='outlined'></AppAutoComplete>
          </AppBoxLayout>
        </AppGridLayout>

        <AppGridLayout container item xs={12}>
          <AppBoxLayout>
            <AppCheckBox></AppCheckBox>
          </AppBoxLayout>
        </AppGridLayout>
      </AppGridLayout>

      <AppGridLayout container item xs={12}>
          <AppBoxLayout>
            <AppButton btnName="submit" variant="contained" className={btnClasses.root}></AppButton>
          </AppBoxLayout>
        </AppGridLayout>
    </AppCard>
  );
}

export default DemoAddEditView;
