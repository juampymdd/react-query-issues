import { LoadingIcon } from "../../shared/components/LoadingIcon";
import { useLabels } from "../hooks";

interface LabelPickerProps {
  selectedLabel: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker:React.FC<LabelPickerProps> = ({selectedLabel, onChange}) => {

  const { labelsQuery } = useLabels();

  const { data: labels, isFetching, isError } = labelsQuery;

  if (isFetching) {
    return (<LoadingIcon />)
  }
  
  return (
    <>
      {
        labels?.map(label => (
          <span 
            key={label.id}
            className={`badge rounded-pill m-1 label-picker ${selectedLabel.includes(label.name) ? 'label-active' : ''}`}
            style={{ border:  ` 1px solid #${label.color}`, color: `#${label.color}` }}
            onClick={() => onChange( label.name )}
          >
            {label.name}
          </span>
        ))
      }
    </>
  )
}
